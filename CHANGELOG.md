# Change Log

## 1.3.0
### Changes
- iframe関連の対応
  - Payjp()のオプションの `threeDSecureWorkflow` に `"iframe"` を追加
  - `payjp.openThreeDSecureIframe()` を追加


## 1.2.0
### Changes
- 3D secure関連の対応
  - `Payjp()` のオプションに `threeDSecureWorkflow` を追加
  - `payjp.createToken()` のシグネチャを更新
    - 第2引数の `TokenOptions` にプロパティ追加
    - 第3引数追加
  - `payjp.openThreeDSecureDialog()` のシグネチャを更新
    - 第2引数にオプションの値もとるようにした


## 1.1.1
- npm package provenance


## 1.1.0
### Changes
- `payjp` をDependenciesからPeer Dependenciesに変更


## 1.0.0
- リリース
