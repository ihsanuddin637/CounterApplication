import Counter from '@/Components/Counter'
import Header from '@/Components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Header />
      <div className='max-w-2xl mx-auto'>
      <Counter />
      </div>
    </main>
  )
}
