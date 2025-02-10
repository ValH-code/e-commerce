import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Mon E-commerce. Tous droits réservés.
      </div>
    </footer>
  )
}

export default Footer