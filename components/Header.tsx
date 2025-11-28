// components/Header.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { signOutUser } from '@/lib/auth';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';

interface HeaderProps {
  user: any;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Submitted:', { search });
    // Add search functionality here
  }

  const handleSignOut = async () => {
    try {
      await signOutUser();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="w-full bg-blue-600 p-4 shadow-lg">
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-white">
        <Link href="/" className="text-xl font-semibold whitespace-nowrap">
          AJOCKS STORE
        </Link>
        <div className="w-full sm:w-[500px]">
          <label htmlFor="search-input" className="sr-only">
            Search
          </label>
          <input
            id="search-input"
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 w-full rounded-lg bg-white/10 border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/40"
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-white text-blue-600 font-semibold hover:opacity-90 transition"
        >
          Search
        </button>
        {user ? (
          <button
            type="button"
            onClick={handleSignOut}
            className="ml-0 sm:ml-4 px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            Sign Out
          </button>
        ) : (
          <Link
            href="/auth/Signin"
            className="ml-0 sm:ml-4 px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            Sign In
          </Link>
        )}
      </form>
    </header>
  );
};

export default Header;
