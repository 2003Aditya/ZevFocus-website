!/bin/bash

tmux new-session -d -s ZevWeb

tmux send-keys "nvim ~/Code/ZevFocusWebsite" C-m
tmux rename-window "Code"

tmux new-window -t ZevWeb:2 -n "term"
tmux send-keys "nvim ~/Code/ZevFocusWebsite -c 'terminal'" C-m

tmux attach -t ZevWeb
