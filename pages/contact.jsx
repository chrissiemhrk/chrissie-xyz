import React from 'react'
import Image from 'next/image'
import Github from '../public/images/github.svg'
import Twitter from '../public/images/twitter.svg'
import Instagram from '../public/images/instagram.svg'
import Linkedin from '../public/images/linkedin.svg'

const contact = () => {
  return (
    <section>
      <p className="mb-10 text-lg">
        If you have any comments, questions, shared interests, etc., please
        email me at&nbsp;
        <a
          href="mailto:chrissiemhrk@gmail.com"
          style={{ color: '#B91C1C' }}
          className="font-semibold"
        >
          chrissiemhrk@gmail.com.
        </a>
      </p>
      <ul>
        You may also reach me via those accounts.
        <li className="flex items-center mb-10 mt-10">
          <span className="flex items-center">
            <span className="mr-2">
              <Image src={Github} alt="Github logo" width={25} height={25} />
            </span>
            GitHub:
          </span>
          <a
            href="https://www.github.com/chrissiemhrk/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#B91C1C' }}
            className="font-semibold ml-1"
          >
            chrissiemhrk
          </a>
        </li>
        <li className="flex items-center mb-10">
          <span className="flex items-center">
            <span className="mr-2">
              <Image src={Twitter} alt="Twitter logo" width={25} height={25} />
            </span>
            Twitter:
          </span>
          <a
            href="https://www.twitter.com/chrissiemhrk/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#B91C1C' }}
            className="font-semibold ml-1"
          >
            chrissiemhrk
          </a>
        </li>
        <li className="flex items-center mb-10">
          <span className="flex items-center">
            <span className="mr-2">
              <Image
                src={Instagram}
                alt="Instagram logo"
                width={25}
                height={25}
              />
            </span>
            Instagram:
          </span>
          <a
            href="https://www.instagram.com/chrissiemhrk/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#B91C1C' }}
            className="font-semibold ml-1"
          >
            chrissiemhrk
          </a>
        </li>
        <li className="flex items-center">
          <span className="flex items-center">
            <span className="mr-2">
              <Image
                src={Linkedin}
                alt="Linkedin logo"
                width={25}
                height={25}
              />
            </span>{' '}
            LinkedIn:
          </span>
          <a
            href="https://www.linkedin.com/in/chrissiemuhorakeye/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#B91C1C' }}
            className="font-semibold ml-1"
          >
            Chrissie Muhorakeye
          </a>
        </li>
      </ul>
    </section>
  )
}

export default contact
