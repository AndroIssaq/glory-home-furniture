"use client"
import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
  } from "@material-tailwind/react";
  import {
    EnvelopeIcon,
    EnvelopeOpenIcon,
    HomeIcon,
    CogIcon,
    Square3Stack3DIcon,
  } from "@heroicons/react/24/outline";
  import {MdPhone , MdWhatsapp,MdOutlineFacebook} from 'react-icons/md'
   
  export function SpeedDialCustomIcon() {
    return (

        <div className="fixed z-[88888] bottom-[20px] right-[20px]">
          <SpeedDial>
            <SpeedDialHandler>
              <IconButton size="lg" className="rounded-full">
                <EnvelopeOpenIcon className="hidden h-5 w-5 group-hover:block" />
                <EnvelopeIcon className="block h-5 w-5 group-hover:hidden" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent>
              <SpeedDialAction >
                <a href="">
                  <MdPhone className="h-5 w-5 text-[#ef4848]" />
                </a>
              </SpeedDialAction>
              <SpeedDialAction>
                <a href="">
                  <MdWhatsapp className="h-5 w-5 text-[#25d366]"  />
                </a>
              </SpeedDialAction>
              <SpeedDialAction>
                <a href="">
                  <MdOutlineFacebook className="h-5 w-5 text-[#1877f2]" />
                </a>
              </SpeedDialAction>
            </SpeedDialContent>
          </SpeedDial>
        </div>
    );
  }