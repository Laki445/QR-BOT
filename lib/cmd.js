const fs = require('fs');
const path = require('path');
const cmd = {};

const pluginFiles = fs.readdirSync(path.join(__dirname, '../plugins')).filter(file => file.endsWith('.js'));

for (const file of pluginFiles) {
  const plugin = require(`../plugins/${file}`);
  if (plugin?.command && typeof plugin.run === 'function') {
    cmd[plugin.command] = plugin.run;
  }
}

module.exports = { cmd };
