module.exports.files = {
  storage: () => {
    return 'new-file.tmp'
  },

  allowedFiles: (req, res) => {
    return 25
  }
}
