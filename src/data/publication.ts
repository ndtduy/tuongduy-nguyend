export interface PublicationItem {
	name: string;
	href: string;
	desc: string;
}

export const publication: PublicationItem[] = [
	{
		name: "Paper Title",
		href: "https://doi.org",
		desc: "A short, plain description or abstract of the publication. One or two sentences is plenty — keep the prose tight so the row stays scannable.",
	},
	{
		name: "Another Thing",
		href: "https://example.com",
		desc: "Use the badge slot for a status hint — installs, stars, version, or just an OSS / Closed marker. Leave the field undefined and the badge disappears.",
	},
	{
		name: "Research Note",
		href: "https://github.com/example/paper",
		desc: "Showcase entries don't have to be products — a write-up, a paper repo, a one-off experiment all fit. The list is rendered in order; reorder to taste.",
	},
];
