import type { PayjpError, Token } from 'payjp'

/**
 * payjp.js v2の型定義
 *
 * @see {@link https://pay.jp/docs/payjs}
 */
namespace PayjpJs {
  export type TypeField = 'card' | 'cardNumber' | 'cardExpiry' | 'cardCvc'
  export type Locale = 'ja' | 'en'
  export type CardBrand = 'Visa' | 'MasterCard' | 'JCB' | 'American Express' | 'Diners Club' | 'Discover' | 'unknown'

  export type StyleInputStatus = 'invalid' | 'complete' | 'empty' | 'base'
  export type StyleCssPseudoKey =
    | ':hover'
    | ':focus'
    | ':disabled'
    | ':-webkit-autofill'
    | '::placeholder'
    | '::selection'
  export type StyleCssProperty =
    | 'backgroundColor'
    | 'color'
    | 'caretColor'
    | 'fontFamily'
    | 'fontSize'
    | 'fontStyle'
    | 'fontVariant'
    | 'fontWeight'
    | 'lineHeight'
    | 'letterSpacing'
    | 'textAlign'
    | 'textDecoration'
    | 'textShadow'
    | 'textTransform'
  export type StyleCssBody = { [key in StyleCssProperty]?: string }
  export type StyleCssPseudoBody = { [key in StyleCssPseudoKey]?: StyleCssBody }
  export type StyleObject = { [key in StyleInputStatus]?: StyleCssBody & StyleCssPseudoBody }

  export type ElementOptions = {
    style?: StyleObject
    placeholder?: string
    disabled?: boolean
    hideIcon?: boolean
  }
  export type ElementEventListenerOnChange = (
    event: 'change',
    listener: (e: {
      elementType: TypeField
      complete: boolean
      empty: boolean
      error: {
        message: string
        type: 'validation_error'
        code: 'incomplete_error' | 'invalid_number' | 'invalid_expiry_year_past' | 'invalid_expiry_month_past'
      }
      brand: CardBrand
    }) => void
  ) => void
  export type ElementEventListenerOnReady = (event: 'ready', listener: (e: { elementType: TypeField }) => void) => void
  export type ElementEventListenerOnFocus = (event: 'focus', listener: (e: { elementType: TypeField }) => void) => void
  export type ElementEventListenerOnBlur = (event: 'blur', listener: (e: { elementType: TypeField }) => void) => void
  export type ElementEventListener = ElementEventListenerOnChange &
    ElementEventListenerOnReady &
    ElementEventListenerOnFocus &
    ElementEventListenerOnBlur

  export type TokenOptions = {
    card: Partial<{
      address_state: string
      address_city: string
      address_line1: string
      address_line2: string
      address_zip: string
      country: string
      name: string
      email: string
      phone: string
      tenant: string
    }>
  }

  export interface Payjp {
    getPublicKey: () => string
    elements: (options?: { locale?: Locale }) => PayjpElements
    createToken: (element: PayjpElement, options?: TokenOptions) => Promise<Partial<PayjpError> & Token>
    retrieveAvailability: (options?: {
      tenant?: string
    }) => Promise<Partial<PayjpError> & { card_types_supported: Array<CardBrand>; livemode: boolean }>
    openThreeDSecureDialog: (objectId: string, timeoutMilliSec?: number) => Promise<void>
  }

  export interface PayjpElements {
    getElement: (type: TypeField) => PayjpElement | null
    create: (type: TypeField, options?: ElementOptions) => PayjpElement
    update: (options?: { locale?: Locale }) => void
  }

  export interface PayjpElement {
    mount: (domElement: string) => void
    on: ElementEventListener
    addEventListener: ElementEventListener
    focus: () => void
    blur: () => void
    clear: () => void
    unmount: () => void
    update: (options: ElementOptions) => void
  }
}

export default PayjpJs
