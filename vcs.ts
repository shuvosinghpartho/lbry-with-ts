/*interface File {
    name: string;
    content: string;
}

interface Commit {
    id: number;
    message: string;
    files: File[];
    timestamp: Date;
}

class VersionControlSystem {
    private files: File[] = [];
    private commits: Commit[] = [];
    private currentCommitId: number = 0;

    addFile(name: string, content: string): void {
        const fileIndex = this.files.findIndex(file => file.name === name);
        if (fileIndex !== -1) {
            console.log(`File '${name}' already exists`);
            return;
        }

        this.files.push({ name, content });
    }

    commit(message: string): void {
        const filesSnapshot = this.files.map(file => ({ ...file }));
        const commit: Commit = {
            id: this.currentCommitId++,
            message,
            files: filesSnapshot,
            timestamp: new Date(),
        };

        this.commits.push(commit);
    }

    getFileContent(name: string): string | undefined {
        const file = this.files.find(file => file.name === name);
        return file ? file.content : undefined;
    }

    getFileHistory(name: string): Commit[] {
        const fileCommits: Commit[] = [];

        for (const commit of this.commits) {
            const file = commit.files.find(file => file.name === name);
            if (file) {
                fileCommits.push(commit);
            }
        }

        return fileCommits;
    }

    revertFileToCommit(name: string, commitId: number): void {
        const commit = this.commits.find(commit => commit.id === commitId);
        if (!commit) {
            console.log(`Commit with ID ${commitId} not found`);
            return;
        }

        const file = commit.files.find(file => file.name === name);
        if (!file) {
            console.log(`File '${name}' not found in commit`);
            return;
        }

        const fileIndex = this.files.findIndex(file => file.name === name);
        if (fileIndex !== -1) {
            this.files[fileIndex].content = file.content;
        } else {
            this.files.push({ name, content: file.content });
        }
    }
}

// Example usage
const vcs = new VersionControlSystem();

vcs.addFile("example.txt", "Initial content");
vcs.commit("Initial commit");

vcs.addFile("example.txt", "Updated content");
vcs.commit("Update example.txt");

console.log(vcs.getFileContent("example.txt")); // Output: Updated content

const fileHistory = vcs.getFileHistory("example.txt");
console.log(fileHistory); // Output: Array of commits for example.txt

vcs.revertFileToCommit("example.txt", fileHistory[0].id);
console.log(vcs.getFileContent("example.txt")); // Output: Initial content*/





interface File {
    name: string;
    content: string;
}

interface Commit {
    id: number;
    message: string;
    files: File[];
    timestamp: Date;
}

class VersionControlSystem {
    private files: File[] = [];
    private commits: Commit[] = [];
    private currentCommitId: number = 0;

    // Add a file to the version control system
    addFile(name: string, content: string): void {
        const fileIndex = this.files.findIndex(file => file.name === name);
        if (fileIndex !== -1) {
            console.log(`File '${name}' already exists`);
            return;
        }

        this.files.push({ name, content });
    }

    // Create a new commit with the changes made to files
    commit(message: string): void {
        const filesSnapshot = this.files.map(file => ({ ...file }));
        const commit: Commit = {
            id: this.currentCommitId++,
            message,
            files: filesSnapshot,
            timestamp: new Date(),
        };

        this.commits.push(commit);
    }

    // Get the content of a file from the latest commit
    getFileContent(name: string): string | undefined {
        const file = this.files.find(file => file.name === name);
        return file ? file.content : undefined;
    }

    // Get the commit history of a file
    getFileHistory(name: string): Commit[] {
        const fileCommits: Commit[] = [];

        for (const commit of this.commits) {
            const file = commit.files.find(file => file.name === name);
            if (file) {
                fileCommits.push(commit);
            }
        }

        return fileCommits;
    }

    // Revert a file to a specific commit
    revertFileToCommit(name: string, commitId: number): void {
        const commit = this.commits.find(commit => commit.id === commitId);
        if (!commit) {
            console.log(`Commit with ID ${commitId} not found`);
            return;
        }

        const file = commit.files.find(file => file.name === name);
        if (!file) {
            console.log(`File '${name}' not found in commit`);
            return;
        }

        const fileIndex = this.files.findIndex(file => file.name === name);
        if (fileIndex !== -1) {
            this.files[fileIndex].content = file.content;
        } else {
            this.files.push({ name, content: file.content });
        }
    }
}

// Example usage
const vcs = new VersionControlSystem();

// Add a file and make an initial commit
vcs.addFile("example.txt", "Initial content");
vcs.commit("Initial commit");

// Modify the file and make another commit
vcs.addFile("example.txt", "Updated content");
vcs.commit("Update example.txt");

// Retrieve the content of the file
console.log(vcs.getFileContent("example.txt")); // Output: Updated content

// Retrieve the commit history of the file
const fileHistory = vcs.getFileHistory("example.txt");
console.log(fileHistory); // Output: Array of commits for example.txt

// Revert the file to the initial commit
vcs.revertFileToCommit("example.txt", fileHistory[0].id);
console.log(vcs.getFileContent("example.txt")); // Output: Initial content

