import { useState } from 'react'

const NavMobile = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleMenu = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <nav className="flex flex-col w-full mt-8 px-2 space-y-3">
    </nav>
  )
}

export default NavMobile
