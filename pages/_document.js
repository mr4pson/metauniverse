import { GoogleAnalytics } from 'components/metrics/google-analytics'
import { YandexMetrics } from 'components/metrics/yandex-metrics'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <div dangerouslySetInnerHTML={{__html: YandexMetrics() + GoogleAnalytics() }}/>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument