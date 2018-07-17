import expect from 'expect'

global.__DEV__ = false
global.__TEST__ = true

localStorage.setItem('current.appName', 'quicklooks')
