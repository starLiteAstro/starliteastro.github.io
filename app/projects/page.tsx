'use client';
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Repo = {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    stargazers_count: number;
    language: string | null;
};

const GITHUB_USERNAME = "starliteastro";

export default function ProjectsPage() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    // Fetch repositories from GitHub API
    useEffect(() => {
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
            .then((res) => res.json())
            .then((data) => {
                setRepos(data);
                setLoading(false);
            });
    }, []);
    if (loading) return (
        <>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">GitHub projects</h1>
        <div>Loading projects...</div>
        </>
    );

    return (
        <main>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">GitHub projects</h1>
            <AnimatePresence>
                <motion.ul
                    style={{ listStyle: "none", padding: 0 }}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {repos.map((repo) => (
                        <motion.li
                            key={repo.id}
                            style={{ paddingBottom: "1rem" }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * repos.indexOf(repo) }}
                        >
                            <span className="flex items-end space-x-2">
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontWeight: "bold", fontSize: "1.1rem" }}
                                >
                                    {repo.name}
                                </a>
                                {repo.language && (
                                    <span style={{ color: "#aaa", fontSize: "0.95rem" }}>
                                        {repo.language}
                                    </span>
                                )}
                            </span>
                            <div className="text-neutral-300">{repo.description}</div>
                        </motion.li>
                    ))}
                </motion.ul>
            </AnimatePresence>
        </main>
    );
}