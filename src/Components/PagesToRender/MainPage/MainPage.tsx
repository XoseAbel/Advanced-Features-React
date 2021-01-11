import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './MainPage.styles';
import { Title } from '../../Title';
import { Description } from '../../Description';
import { ButtonRoute } from '../../ButtonRoute';
import {
  USE_LAYOUT_EFFECT,
  RENDER_WITH_KEY,
  CLOSURE_AVOID_MULTIPLE_CALLS,
} from '../../../Routes/const';

export default () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.main}
      direction='column'
      justify='center'
      alignItems='center'
    >
      <Title>React Advance Features</Title>
      <Description>
        In this page, we like to show some special resources/tricks to improve
        the performance of your React app, and some explanations about how works
        the advanced Hooks.
      </Description>
      <Grid
        item
        container
        direction='row'
        justify='flex-start'
        alignItems='center'
      >
        <ButtonRoute nextRoute={USE_LAYOUT_EFFECT}>useLayoutEffect</ButtonRoute>
        <ButtonRoute nextRoute={RENDER_WITH_KEY}>
          reset component with key
        </ButtonRoute>
        <ButtonRoute nextRoute={CLOSURE_AVOID_MULTIPLE_CALLS}>
          multiple calls to API - Closure
        </ButtonRoute>
      </Grid>
      <div className='tipografialibro' id='tipografialibro'>
        <p>
          <a href='https://codesandbox.io/s/heuristics-g74tu'>CodeSandbox</a>
        </p>
        <p>
          <a href='https://codesandbox.io/s/binding-this-2169j'>
            binding y this
          </a>
          <br />
          <br />
          <strong>Introducción</strong>
          <br />

          <a href='https://codesandbox.io/s/jsx-basics-xd9dx'>
            Creando elementos
          </a>
          <p></p>
          <p>
            <a href='https://codesandbox.io/s/declarative-render-kjqkv'>
              Invocando un componente
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/declarative-render-differences-1-om8ec'>
              Diferencia entre invocar y no invocar
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/fibers-g8s6f'>Stack sintético</a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/heuristics-g74tu'>
              Tipo y reconciliación
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/pedantic-spence-dkx48'>
              Componentes
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/profiler-example-12fj1'>
              Commits
            </a>
          </p>
          <p>
            <span className='marker'>
              <a href='https://codesandbox.io/s/declarative-render-kjqkv'>
                ¿Qué pasa al invocar un componente?
              </a>
            </span>
          </p>
          <p>
            <a href='https://codesandbox.io/s/custom-hook-6iiz3'>Custom Hook</a>
            <br />
            <br />
            <strong>Gestión del estado</strong>
          </p>
          <p>
            <a href='https://codesandbox.io/s/use-state-intro-jmy4s'>
              Equivalente a this.state/this.setState para funciones
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/use-state-lazy-1yi5y'>
              Lazy init
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/use-state-batched-updates-d00g8'>
              Batch de updates
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/closure-n5z7s'>Closure</a>
          </p>

          <p>
            <a href='https://codesandbox.io/s/controlled-vs-uncontrolled-forms-cud9k'>
              Controlado vs no controlado (form)
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/uncontrolled-refs-4eoz0'>
              No controlado (refs)
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/refs-nullable-29qc2'>
              Refs a null
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/uncontrolled-and-keys-form-jkolr'>
              Keys y no controlado (form)
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/uncontrolled-custom-41f1x'>
              No controlado (custom)
            </a>
          </p>
          <p>
            <span className='marker'>
              <a href='https://codesandbox.io/s/uncontrolled-from-controlled-9lvbg'>
                Contolado =&gt; No controlado
              </a>
            </span>
          </p>
          <p>
            <a href='https://codesandbox.io/s/use-reducer-1-5gi9y'>
              useReducer sencillo
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/use-reducer-2-prles'>
              useReducer init y acción más compleja
            </a>
          </p>
          <p>
            <span className='marker'>
              <a href='https://codesandbox.io/s/use-reducer-manage-form-q0hr2'>
                useReducer complejo
              </a>
            </span>
          </p>
          <p>
            <a href='https://codesandbox.io/s/use-state-machine-6rxv7'>
              Mismo form con useStateMachine
            </a>

            <br />
            <strong>Efectos laterales</strong>
          </p>
          <p>
            <a href='https://codesandbox.io/s/useeffectnodeps-1vgj7'>
              useEffect
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/useeffectcleanup-gvjvu'>
              useEffect con cleanup
            </a>
          </p>
          <p>&nbsp;</p>
          <p>
            <a href='https://codesandbox.io/s/useeffectpromiseko-2zf2h'>
              useEffect promesas problemáticas
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/useeffectpromiseok-k7q67'>
              useEffect promesas canceladas
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/lifecycle-228gi'>
              "Equivalencias" useEffect / ciclo de vida
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/uselayouteffect-01lhe'>
              useLayoutEffect
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/prevent-updates-on-unmounted-components-7ojrb'>
              isMounted (useEffect + useRef)
            </a>

            <br />
            <strong>Eventos sintéticos</strong>
            <br />
            <br />
            <a href='https://codesandbox.io/s/batched-updates-ww8y7'>
              Batching de updates
            </a>
            <br />
            <br />
            <strong>Refs</strong>
          </p>
          <p>
            <a href='https://codesandbox.io/s/ref-special-prop-y0e6r'>
              Ref prop especial
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/ref-api-tgn9r'>
              Ref a instancia (️)
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/ref-dom-s8gid'>
              Ref a nodo DOM (clase)
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/ref-function-forwarding-j0tli'>
              Ref a nodo DOM (forwarding)
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/ref-syncing-gt2tt'>
              useSyncedRef
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/createref-vs-useref-i78id'>
              Diferencia createRef vs useRef
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/ref-api-use-imperative-handle-07shs'>
              useImperativeHandle
            </a>
            <br />
            <br />
            <strong>Componentes genéricos y reusables</strong>
          </p>
          <p>
            <a href='https://codesandbox.io/s/children-api-gngh1'>
              API Children
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/elements-as-props-y8r0m'>
              Elementos como props
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/controlled-component-rpyus'>
              Componentes controlados
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/passing-props-cloneelement-i66xj'>
              cloneElement
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/element-as-a-template-lrk3z'>
              Elemento como plantilla
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/render-prop-and-params-w0wn6'>
              renderProps
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/children-as-a-function-lt4tm'>
              Children as a function
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/component-as-a-template-mlyxk'>
              Componentes como props
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/hoc-y8yu3'>HOC</a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/hoc-forward-ref-u4vnd'>
              forwardRef para no "ocultar" la ref
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/render-prop-vs-hoc-kwthv'>
              render prop vs HOC
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/render-props-vs-hoc-vs-custom-hook-kq8fp'>
              Custom Hooks
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/render-prop-and-hoc-using-hook-jiq9h'>
              render prop &amp; HOC a partir de Hook
            </a>
          </p>
          <p>
            <strong>Context</strong>
          </p>
          <p>
            <a href='https://codesandbox.io/s/context-api-s3pe9'>
              API de contexto
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/hide-the-context-api-mdi1v'>
              Ocultar uso de contexto
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/multiple-contexts-gs7np'>
              Múltiples proveedores/consumidores
            </a>
            <br />

            <strong>Error Boundaries</strong>
          </p>
          <p>
            <a href='https://codesandbox.io/s/handling-errors-b4nxe'>
              Error Boundary
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/handling-async-errors-9e5be'>
              Errores en código asíncrono
            </a>
            <br />

            <strong>Portals</strong>
          </p>
          <p>
            <a href='https://codesandbox.io/s/portal-intro-c1epz'>
              createPortal
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/portals-to-other-places-hkm7s'>
              <span style={{ backgroundColor: '#ffff66' }}>
                Portales a otras partes de la interfaz
              </span>
            </a>
            <br />
            <br />
            <strong>Optimización</strong>
          </p>
          <p>
            <a href='https://codesandbox.io/s/vigorous-hopper-l3l9s'>
              shouldComponentUpdate
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/react-memo-1u50n'>React.memo</a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/use-memo-hpdp6'>
              useMemo para cálculos pesados
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/element-identity-osuzv'>
              Identidad de los elementos
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/use-memo-expensive-children-bimgn'>
              useMemo para elementos
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/use-callback-red5r'>
              useCallback
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/lifting-dependencies-7g6m8'>
              "Lifting dependencies up"
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/lifting-dependencies-forked-c6s5s'>
              Contexto y optimizaciones
            </a>
          </p>
          <p>
            <a href='https://codesandbox.io/s/inmutability-and-optimizations-lwfbb'>
              Inmutabilidad y optimizaciones
            </a>
          </p>
        </p>
      </div>
    </Grid>
  );
};
