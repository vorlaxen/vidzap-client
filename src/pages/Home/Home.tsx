import PageMeta from '@/components/Common/PageMeta'
import { AppConfig } from '@/config/environment.config'
import { useTranslation } from 'react-i18next'
import Hero from './Hero/Hero'

const Home = () => {
  const { t: tPages } = useTranslation('pages')

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <PageMeta
        title={`${AppConfig.siteName} ${tPages('home.title')}`}
        description={tPages('home.description')}
      />

      <Hero />
      
    </div>
  )
}

export default Home
