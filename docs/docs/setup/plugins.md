# Plugins
<span style="color:orange;">:octicons-alert-fill-24: Experimental. Expect breaking changes.</span>

The functionality of SysReptor can be extended by plugins. 
Plugins can hook into the SysReptor core and provide additional features both in the API and the web UI.

All plugins are disabled by default. To enable a plugin, add it to the [`ENABLED_PLUGINS`](./configuration.md#plugins) setting.


## Official Plugins

Official plugins are maintained by the SysReptor team and are included in official docker images.

| Plugin | Description | 
| ------ | ----------- |
| [cyberchef](https://github.com/Syslifters/sysreptor/tree/main/plugins/cyberchef) | CyberChef integration |
| [graphqlvoyager](https://github.com/Syslifters/sysreptor/tree/main/plugins/graphqlvoyager) | GraphQL Voyager integration |
| [checkthehash](https://github.com/Syslifters/sysreptor/tree/main/plugins/checkthehash) | Hash identifier |
| [customizetheme](https://github.com/Syslifters/sysreptor/tree/main/plugins/customizetheme) | Customize UI themes per instance |
| [demoplugin](https://github.com/Syslifters/sysreptor/tree/main/plugins/demoplugin) | A demo plugin that demonstrates the plugin system |
| [projectnumber](https://github.com/Syslifters/sysreptor/tree/main/plugins/projectnumber) | Automatically adds an incremental project number to new projects |
| [webhooks](https://github.com/Syslifters/sysreptor/tree/main/plugins/webhooks) | Send webhooks on certain events |


<!--
## Custom Plugins
It is possible to develop and load custom plugins.

The plugin system is currently experimental. Expect breaking changes anytime. Use at own risk.
-->