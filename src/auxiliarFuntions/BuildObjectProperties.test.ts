import { buildObjectProperties } from './BuildObjectPropertis';

test('simple object insert string', () => {
  expect(buildObjectProperties('name', 'Abel')).toEqual({ name: 'Abel' });
});

test('simple object insert null', () => {
  expect(buildObjectProperties('name', null)).toEqual({ name: null });
});

test('simple object no second param', () => {
  expect(buildObjectProperties('name')).toEqual({ name: undefined });
});

test('simple object, previous', () => {
  const previous = { surname: 'Lopez' };
  expect(buildObjectProperties('name', 'Abel', previous)).toEqual({
    name: 'Abel',
    surname: 'Lopez',
  });
});

test('simple object, previous typo no-error', () => {
  const previous = { surname: 'Lopez' };
  expect(buildObjectProperties('sulname', 'Lopez', previous)).toEqual({
    sulname: 'Lopez',
    surname: 'Lopez',
  });
});

test('simple object, key finish in dot', () => {
  const previous = { surname: 'Lopez' };
  expect(buildObjectProperties('name.', 'Abel', previous)).toEqual({
    name: { '': 'Abel' },
    surname: 'Lopez',
  });
});

test('simple object, previous, overwrite', () => {
  const previous = { name: 'Lopez' };
  expect(buildObjectProperties('name', 'Abel', previous)).toEqual({
    name: 'Abel',
  });
});

test('second level object', () => {
  expect(buildObjectProperties('person.name', 'Abel')).toEqual({
    person: { name: 'Abel' },
  });
});

test('second level, previous', () => {
  const previous = { country: 'Spain' };
  expect(buildObjectProperties('person.name', 'Abel', previous)).toEqual({
    country: 'Spain',
    person: { name: 'Abel' },
  });
});

test('second level, previous, same level insert', () => {
  const previous = { person: { surname: 'Lopez' }, country: 'Spain' };
  expect(buildObjectProperties('person.name', 'Abel', previous)).toEqual({
    country: 'Spain',
    person: { name: 'Abel', surname: 'Lopez' },
  });
});

test('third level object', () => {
  expect(buildObjectProperties('company.users.name', 'Abel')).toEqual({
    company: { users: { name: 'Abel' } },
  });
});

test('third level object, previous', () => {
  const previous = { country: 'Spain' };
  expect(buildObjectProperties('company.users.name', 'Abel', previous)).toEqual(
    {
      company: { users: { name: 'Abel' } },
      country: 'Spain',
    }
  );
});

test('third level, previous, same level insert', () => {
  const previous = {
    company: { users: { surname: 'Lopez' } },
    country: 'Spain',
  };
  expect(buildObjectProperties('company.users.name', 'Abel', previous)).toEqual(
    {
      country: 'Spain',
      company: { users: { name: 'Abel', surname: 'Lopez' } },
    }
  );
});

//Errors
test('third param not object boolean', () => {
  expect(() => buildObjectProperties('name', 'Abel', true)).toThrowError(Error);
});
test('simple object third param not object', () => {
  expect(() => buildObjectProperties('name', 'abel', 'hola')).toThrowError(
    Error
  );
});
test('first level, previous, ERROR overwrite value with object', () => {
  const previous = {
    person: { name: 'Abel', surname: 'Lopez' },
    country: 'Spain',
  };
  expect(() =>
    buildObjectProperties('country.prueba', 'Error', previous)
  ).toThrowError(Error);
});
test('second level, previous, ERROR overwrite value with object', () => {
  const previous = {
    person: { name: 'Abel', surname: 'Lopez' },
    country: 'Spain',
  };
  expect(() =>
    buildObjectProperties('person.name.prueba', 'Error', previous)
  ).toThrowError(Error);
});
test('first param undefined', () => {
  const previous = {
    country: 'Spain',
  };
  expect(() =>
    buildObjectProperties(undefined, 'Error', previous)
  ).toThrowError(Error);
});
