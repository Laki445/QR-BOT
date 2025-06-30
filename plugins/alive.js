module.exports = {
  command: 'alive',
  run: async (sock, m, text) => {
    await sock.sendMessage(m.key.remoteJid, {
      text: '✅ QR-only Bot is active and working!'
    });
  }
};
