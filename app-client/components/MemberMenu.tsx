'use client'
import { HamburgerIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import AuthButton from './AuthButton';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';


const MemberMenu = ({
    appName, user, children,
}: {
    appName: string, user: Object, children: React.ReactNode
}) => {

    const [menuOpen, setMenuOpen] = useState(false)



    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    event.preventDefault()

                    setMenuOpen(false)
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return user ? (
        <>
            <div className='relative'
            // onMouseEnter={() => setMenuOpen(true)}
            >
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div>
                        <HamburgerIcon boxSize={7} />
                    </div>
                </button>
                <div ref={wrapperRef}>
                    {menuOpen ?
                        <div className='absolute right-[-80px]  mt-2  '>
                            <div className='border border-gray-400 bg-white rounded-md'>
                                <div className="flex flex-col  gap-2 p-4">

                                    <div className=''>
                                        <p className='text-sm text-right'>{user?.email}</p>
                                        <hr className='my-2' />
                                    </div>

                                    <div className='' onClick={() => setMenuOpen(false)}>
                                        <Link
                                            href={`/${appName}/settings`}
                                            className="flex justify-center no-underline bg-btn-background hover:bg-gray-100 p-2"
                                        ><p className='text-sm text-center'>
                                                Member settings
                                            </p>
                                        </Link>
                                    </div>
                                    {/* 
              <div className=''>
               <Link
                 href={`/signout`}
                 className="flex justify-end no-underline bg-btn-background hover:bg-gray-100"
               ><p className='text-sm text-right'>
                   log out
                 </p>
               </Link>
             </div> */}


                                </div>
                            </div>
                        </div>
                        : null}
                </div>
            </div>
        </>
    )
        : null
}

export default MemberMenu;
