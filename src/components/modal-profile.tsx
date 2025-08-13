'use client'

import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

const Example: React.FC<{ imgTitle: string, imgAlt: string }> = ({ imgTitle, imgAlt }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="static p-1 text-sm font-semibold text-gray-900 hover:bg-black w-43.5 h-64"
      >
        <img src={imgTitle} alt={imgAlt} />
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative rounded-lg bg-white data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:w-full sm:max-w-max data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
                <img src={imgTitle} alt={imgAlt} className='mx-auto' />
                <button
                type="button"
                onClick={() => setOpen(false)}
                className="duration-200 bg-gray-400 hover:text-white hover:bg-red-500 w-10 h-10 text-2xl absolute right-2 top-2"
                >
                X
                </button>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default Example;
