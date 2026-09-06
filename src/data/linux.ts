export interface LinuxCommand {
  command: string;
  description: string;
  example?: string;
}

export const linuxCommands: LinuxCommand[] = [
  { command: "df -h", description: "Show disk space usage in human-readable form." },
  { command: "free -m", description: "Show memory usage in megabytes." },
  { command: "top", description: "Live view of running processes and resource usage." },
  { command: "ps aux", description: "List all running processes with details." },
  { command: "systemctl", description: "Control and inspect systemd services.", example: "systemctl status nginx" },
  { command: "journalctl", description: "Query the systemd journal/logs.", example: "journalctl -u nginx -f" },
  { command: "ss -tulpn", description: "List listening TCP/UDP sockets with owning processes." },
  { command: "grep", description: "Search text using patterns.", example: "grep -r 'ERROR' /var/log" },
  { command: "find", description: "Search for files matching criteria.", example: "find / -name '*.log' -mtime -1" },
  { command: "awk", description: "Pattern scanning and text processing.", example: "awk '{print $1}' access.log" },
  { command: "sed", description: "Stream editor for filtering and transforming text.", example: "sed 's/foo/bar/g' file.txt" },
  { command: "curl", description: "Transfer data to/from a server; useful for testing endpoints.", example: "curl -i http://localhost:3000/health" },
  { command: "dig", description: "Query DNS records.", example: "dig example.com" },
  { command: "nslookup", description: "Query DNS name servers (simpler alternative to dig)." },
  { command: "ssh", description: "Securely connect to a remote host.", example: "ssh user@host" },
];

export const bashExample = `#!/usr/bin/env bash
set -euo pipefail

# Simple health-check loop used before promoting a deploy.
URL="\${1:-http://localhost:3000/health}"
for i in {1..5}; do
  if curl -sf "$URL" > /dev/null; then
    echo "Healthy on attempt $i"
    exit 0
  fi
  sleep 3
done
echo "Health check failed after 5 attempts" >&2
exit 1
`;

export const pythonExample = `#!/usr/bin/env python3
"""Small automation example: tail a log file for a pattern."""
import sys
import time

def tail_for(path: str, pattern: str) -> None:
    with open(path, "r") as f:
        f.seek(0, 2)
        while True:
            line = f.readline()
            if not line:
                time.sleep(0.5)
                continue
            if pattern in line:
                print(line.strip())

if __name__ == "__main__":
    tail_for(sys.argv[1], sys.argv[2])
`;
