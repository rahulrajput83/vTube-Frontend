import { Menu } from '@headlessui/react';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa'


export default function CommentOption(props) {
    const [show, setShow] = useState('')

    const handleOldComment = (e) => {
        e.preventDefault();
        setShow('hidden')
        props.setOption('Oldest First');
        const reverse = props.comment.reverse()
        props.setCommentData(reverse);
    }

    const handleNewComment = (e) => {
        e.preventDefault();
        setShow('hidden')
        props.setOption('Newest First');
        const reverse = props.comment.reverse()
        props.setCommentData(reverse);
    }



    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button onClick={() => setShow('flex')} className="p-2 inline-flex justify-center text-sm">
                    {props.option}
                    <FaAngleDown className="ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Menu.Items className={`absolute ${show} bg-[#36454F] right-0 rounded z-10 shadow-lg w-40`}>
                <div className="py-1 flex flex-col w-full">
                    <Menu.Item onClick={handleOldComment} className='w-full flex justify-end px-2 items-end cursor-pointer py-2 hover:bg-[#010102]'>
                        <span>Oldest First</span>
                    </Menu.Item>
                    <Menu.Item onClick={handleNewComment} className='w-full flex justify-end px-2 items-end cursor-pointer py-2 hover:bg-[#010102]'>
                        <span>Newest First</span>
                    </Menu.Item>
                </div>
            </Menu.Items>

        </Menu>
    )
}
