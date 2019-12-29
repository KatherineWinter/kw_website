export const init = () => {
  const ga = window.ga || ((...args) => (ga.q = ga.q || []).push(args))

  ga('create', 'UA-16285137-1', 'katherinewinter.com', 'myTracker', {
    transport: 'beacon'
  });

  ga('set', 'transport', 'beacon')
  ga('send', 'pageview')
}

export const send = (event, type, desc) => {
  const ga = window.ga || ((...args) => (ga.q = ga.q || []).push(args))
  ga('myTracker.send', event, type, desc)
}
