#
# RUNTIME FOR THE TOOL
# Sets the basic environment where the tool (and the projects it supports) will run.
#
FROM node:10-alpine

# NOTE: While we are under development, one RUN per line is better. When done, using "&& \" to group related lines is a better practice
RUN apk add --update wget nano unzip git

RUN mkdir -p /c3pr/temp /c3pr/agent

#
#
# TOOL DOWNLOAD AND INSTALATION
# This adds the tool binary to the PATH. Also does any configuration specific to the tool.
#
#
RUN npm i -g typescript tslint eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
RUN mkdir -p /c3pr/rules
COPY rules /c3pr/rules


#
#
# TOOL METADATA FOR C-3PR AGENT
# This one file (or many files) that contains the arguments for the tools this dockerfile provides.
# Basically this files tells what extensions (e.g. "java", "js") this tool can be executed on,
# what is the actual command the agent should execute to invoke the tool (e.g. "prettify --file #{filename}")
# and what should be the text of the PRs created as result of this tool.
#
#
RUN mkdir -p /c3pr/agent/tools
ENV C3PR_AGENT_TOOLS_PATH=/c3pr/agent/tools
COPY tools /c3pr/agent/tools

#
#
# DOWNLOAD C-3PR AGENT
# The agent is the program that will register this tool with the C-3PR hub while it is online; will also listen to
# tool invocation requests emitted by the c3pr-brain; will clone the repository before the tool execution; will
# execute the tool on the folder where the repo was cloned; will pick up any diffs and request a PR a creation.
#
#
RUN wget -O /c3pr/agent/c3pr-agent https://github.com/c3pr/c3pr-agent/releases/download/7.1.0/c3pr-agent-alpine-7.1.0
RUN chmod +x /c3pr/agent/c3pr-agent

EXPOSE 5003

ENTRYPOINT /c3pr/agent/c3pr-agent
