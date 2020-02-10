import { extend, localize } from 'vee-validate'
import {
  required,
  alpha_spaces as alphaSpaces,
  alpha_dash as alphaDash,
  email,
  min
} from 'vee-validate/dist/rules'
import es from 'vee-validate/dist/locale/es.json'

extend('required', required)
extend('email', email)
extend('alpha_spaces', alphaSpaces)
extend('alpha_dash', alphaDash)
extend('min', min)

localize('es', es)
