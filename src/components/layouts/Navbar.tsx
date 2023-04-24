"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import SearchBar from "../ui/SearchBar";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
	const [showDropdown, setShowDropdown] = useState<boolean>(false);

	function handleDropdown() {
		setShowDropdown((prev) => !prev);
	}

	return (
		<nav className="absolute top-0 w-screen flex-col bg-black">
			<div className="flex h-14 items-center justify-around">
				{/* Logo container */}
				<div className="logo flex items-center justify-between gap-x-3">
					<Image
						src="/batchbook-logo.svg"
						width="36"
						height="36"
						alt="logo"
					/>
					<h1 className="text-2xl font-bold">BatchBook</h1>
				</div>

				{/* Navigation links */}
				<div className="hidden md:block">
					<div className="links flex items-center justify-between gap-x-12 lg:gap-x-14">
						<Link href="/workspaces">Workspaces</Link>
						<Link href="/messages">Messages</Link>
						<Link href="/tasks">Tasks</Link>
					</div>
				</div>

				<SearchBar />

				<FaBars
					className="block h-6 w-6 cursor-pointer active:fill-slate-300 md:hidden"
					onClick={handleDropdown}
				/>

				{/* Right bar */}
				<div className="flex justify-between align-middle">
					<MdAccountBox className="h-9 w-9 cursor-pointer" />
				</div>
			</div>

			{/* Dropdown navbar menu for mobile responsive view */}
			{showDropdown && (
				<div className="absolute right-4 z-10 mt-2 w-48 rounded-md bg-shade-blue bg-opacity-75 py-2 shadow-lg backdrop-blur-lg">
					<Link
						href="/workspaces"
						className="block border-b-2 border-black px-4 py-4 text-sm text-slate-100 active:bg-light-shade-blue"
					>
						Workspaces
					</Link>
					<Link
						href="/messages"
						className="block border-b-2 border-black px-4 py-4 text-sm text-slate-100 active:bg-light-shade-blue"
					>
						Messages
					</Link>
					<Link
						href="/tasks"
						className="block px-4 py-4 text-sm text-slate-100 active:bg-light-shade-blue"
					>
						Tasks
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
