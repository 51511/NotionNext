import { loadExternalResource } from '@/lib/utils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

/**
 * 初始化 Adsterra 广告
 * @returns
 */
export default function AdsterraAds() {
  const initAdsterra = () => {
    loadExternalResource(`//www.topcreativeformat.com/34cc9cdc1485e1ef477da647218111aa/invoke.js`, 'js').then(url => {
      setTimeout(() => {
        const ads = document.getElementsByClassName('adsbyadsterra')
        if (ads.length > 0) {
          for (let i = 0; i < ads.length; i++) {
            try {
              // Adsterra广告加载后自动处理，不需要像 Google Ads 那样手动推送
            } catch (e) {
              console.error(e)
            }
          }
        }
      }, 100)
    })
  }

  const router = useRouter()

  useEffect(() => {
    // 延迟3秒加载广告
    setTimeout(() => {
      initAdsterra()
    }, 3000)
  }, [router])

  return null
}
