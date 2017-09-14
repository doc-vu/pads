//jshint ignore: start
/* Generated file based on ejs templates */
define([], function() {
    return {
    "commandFileTemplate.ejs": "<% mapCount=0 -%>\n<% mapInfo.map(function(entry) { -%>\n<% mapCount=mapCount+entry.instances -%>\n<% }) -%>\n<% reduceCount=0 -%>\n<% reduceInfo.map(function(entry) { -%>\n<% reduceCount=reduceCount+entry.instances -%>\n<% }) -%>\n<% controllerInfo.map(function(entry) { -%>\n<%- AppHostList[entry.path] %> <%- entry.scriptName%> <%- entry.args %> -m <%- mapCount %> -r <%- reduceCount %> <%- entry.sortingFileName %> &> ./result/<%- AppHostList[entry.path] %><%-entry.name%><%- i%>.log &\n<% }) -%>\n<% mapInstance=0 -%>\n<% mapInfo.map(function(entry) { -%>\n<% for(i=1; i<= entry.instances; i++){ -%>\n<%- AppHostList[entry.path] %> <%- entry.scriptName%> <%- mapInstance%> <%- entry.controllerIP %> <%- entry.args %> &> ./result/<%- AppHostList[entry.path] %><%-entry.name%><%- i%>.log &\n<% mapInstance=mapInstance+1 -%>\n<% } -%>\n<% }) -%>\n<% redInstance=0 -%>\n<% reduceInfo.map(function(entry) {  -%>\n<% for(i=1; i<= entry.instances; i++){ -%>\n<%- AppHostList[entry.path] %> <%- entry.scriptName%> <%- redInstance%> <%- entry.controllerIP %> <%- entry.args %> &> ./result/<%- AppHostList[entry.path] %><%-entry.name%><%- i%>.log &\n<% redInstance = redInstance + 1 -%>\n<% } -%>\n<% }) -%>",
    "topologyFileTemplate.ejs": "#!/usr/bin/python\n\n\"\"\"\nThis is a simple example that demonstrates multiple links\nbetween nodes.\n\"\"\"\n\nfrom mininet.cli import CLI\nfrom mininet.log import setLogLevel\nfrom mininet.net import Mininet\nfrom mininet.topo import Topo\nfrom mininet.link import TCLink, TCIntf, Link\nfrom time import sleep\n\n\ndef runMultiLink():\n    \"Create and run multiple link network\"\n    topo = simpleMultiLinkTopo( n=2 )\n    net = Mininet( topo=topo )\n    net.start()\n    return net\n\n\ndef runApps(net):\n    \"Run cmds in command.txt\"\n    print \"Running applications\"\n    with open(\"command.txt\") as f:\n        for line in f:\n            splitedLine = line.split(' ', 1)\n            print splitedLine[0]\n            host = net.get(splitedLine[0])\n            print splitedLine[1]\n            host.cmd(splitedLine[1])\n            sleep(1)\n\nclass simpleMultiLinkTopo( Topo ):\n    \"Simple topology with multiple links\"\n\n    def __init__( self, n, **kwargs ):\n        Topo.__init__( self, **kwargs )\n\n    <% hostInfo.map(function(host) {  -%>\n    <%- host.name %> = self.addHost('<%- host.name %>', ip='<%- host.ip_addr %>')\n    <% }) -%>\n\n    <% switchInfo.map(function(entry) { -%>\n    <%- entry.name %> = self.addSwitch('<%- entry.name %>')\n    <% }) -%>\n\n    <% nodeLink_listInfo.map(function(entry) { -%>\n    self.addLink(<%- entry.src_name %>,<%- entry.dst_name %>,intf=TCIntf, params1 = { 'bw': <%- entry.Bandwidth_mbps%> , 'delay' : '<%- entry.Delay_ms%>ms' , 'loss' : <%- entry.Loss%>}, params2 = { 'bw': <%- entry.Bandwidth_mbps%> , 'delay' : '<%- entry.Delay_ms%>ms' , 'loss' : <%- entry.Loss%>})\n    <% }) -%>\n\nif __name__ == '__main__':\n    setLogLevel( 'info' )\n    net = runMultiLink()\n    runApps(net)\n    sleep(80)\n    #CLI( net )\n    net.stop()\n"
}});