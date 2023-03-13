'use client';

import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '..';
import { LoginModal } from '../loginModal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  console.log(session);
  return (
    <header>
      <div className="header">
        <div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block align-top"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                fill="#FFF"
              />
              <path
                d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                fill="#555AB9"
              />
              <path
                d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                fill="#91BAF8"
              />
            </g>
          </svg>
          <h1 className="md:text-2x my-1.5 ml-2.5 inline-block text-xl font-extrabold leading-[1]">
            Comfort Zone
          </h1>
        </div>
        <div className="flex gap-x-2">
          {session && (
            <>
              <Image
                src={session?.user?.image!}
                alt="profile"
                width={32}
                height={32}
                className="block rounded-full"
              />
              <Button size="small" onClick={signOut} label="Log out" />
            </>
          )}
          {!session && (
            <>
              <Button
                primary
                size="small"
                onClick={() => setIsOpen(true)}
                label="Log in"
              />
            </>
          )}
        </div>
      </div>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
