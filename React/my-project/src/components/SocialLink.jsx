import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function SocialLink() {
  return (
     <div className="flex bg-green-300 ml-20 mt-10 ">
              <div className="flex space-x-4 mt-6">
      <a href="https://github.com/jaydipchangani" target="_blank" >
            <FaGithub className="text-3xl text-gray-700 hover:text-black transition" />
        </a>

        <a href="https://linkedin.com/in/jaydip-changani" target="_blank">
            <FaLinkedin className="text-3xl text-gray-700 hover:text-gray-900 transition" />
        </a>
    </div>
    </div>
  )
}

export default SocialLink
