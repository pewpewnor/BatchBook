"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import SearchBar from "../ui/SearchBar";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
	const [showNavbarDropdown, setShowNavbarDropdown] =
		useState<boolean>(false);

	function toggleNavbarDropdown() {
		setShowNavbarDropdown((prev) => !prev);
	}

	return (
		<nav className="absolute top-0 w-screen flex-col bg-black">
			<div className="flex h-12 items-center justify-between px-8">
				{/* Logo container */}
				<div className="logo flex items-center justify-between gap-x-3">
					<Image
						src="/batchbook-logo.svg"
						width="32"
						height="32"
						alt="logo"
					/>
					<h1 className="select-none text-xl font-bold">BatchBook</h1>
				</div>

				{/* Navigation links */}
				<div className="hidden md:block">
					<div className="links flex items-center justify-between gap-x-12 lg:gap-x-14">
						<Link
							href="/"
							className="font-bold hover:text-slate-400"
						>
							Home
						</Link>
						<Link
							href="/workspaces"
							className="font-bold hover:text-slate-400"
						>
							Workspaces
						</Link>
					</div>
				</div>

				<FaBars
					className="block h-6 w-6 cursor-pointer active:fill-slate-300 md:hidden"
					onClick={toggleNavbarDropdown}
				/>

				{/* Right bar */}
				<div className="flex justify-between align-middle">
					<MdAccountBox className="h-8 w-8 cursor-pointer" />
				</div>
			</div>

			{/* Dropdown navbar menu for mobile responsive view */}
			{showNavbarDropdown && (
				<div className="absolute right-4 z-10 mt-2 w-48 rounded-md bg-shade-blue bg-opacity-75 py-2 shadow-lg backdrop-blur-lg">
					<Link
						href="/"
						className="block border-b-2 border-black px-4 py-4 text-sm text-slate-100 active:bg-light-shade-blue"
					>
						Home
					</Link>
					<Link
						href="/workspaces"
						className="block border-b-2 border-black px-4 py-4 text-sm text-slate-100 active:bg-light-shade-blue"
					>
						Workspaces
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
