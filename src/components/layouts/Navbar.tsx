"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import SearchBar from "../ui/SearchBar";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
	const [showNavbarDropdown, setShowNavbarDropdown] =
		useState<boolean>(false);

	return (
		<nav className="absolute top-0 w-screen flex-col bg-black">
			<div className="h-14 flex justify-around items-center">
				{/* Logo container */}
				<div className="logo flex justify-between items-center gap-x-3">
					<Image
						src="/batchbook-logo.svg"
						width="36"
						height="36"
						alt="logo"
					/>
					<h1 className="text-2xl font-bold">Batchbook</h1>
				</div>

				{/* Navigation links */}
				<div className="hidden md:block">
					<div className="links flex justify-between items-center gap-x-12 lg:gap-x-14">
						<Link href="/workspaces">Workspaces</Link>
						<Link href="/messages">Messages</Link>
						<Link href="/tasks">Tasks</Link>
					</div>
				</div>

				<SearchBar />

				<FaBars
					className="block md:hidden w-6 h-6 cursor-pointer active:fill-slate-300"
					onClick={() => {
						setShowNavbarDropdown((prev) => !prev);
					}}
				/>

				{/* Right bar */}
				<div className="flex justify-between align-middle">
					<MdAccountBox className="w-9 h-9 cursor-pointer" />
				</div>
			</div>

			{/* Dropdown navbar menu for mobile responsive view */}
			{showNavbarDropdown && (
				<div className="absolute right-4 mt-2 py-2 w-48 bg-shade-blue bg-opacity-75 backdrop-blur-lg rounded-md shadow-lg z-10">
					<Link
						href="/workspaces"
						className="block px-4 py-4 text-sm text-slate-100 active:bg-light-shade-blue border-b-2 border-black"
					>
						Workspaces
					</Link>
					<Link
						href="/messages"
						className="block px-4 py-4 text-sm text-slate-100 active:bg-light-shade-blue border-b-2 border-black"
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
