import type PayjpJs from './index'

/**
 * windowオブジェクトからpayjp.jsのAPIを参照
 */
declare global {
  interface Window {
    Payjp?: (publicKey: string, options?: { locale?: PayjpJs.Locale }) => PayjpJs.Payjp
  }
}
