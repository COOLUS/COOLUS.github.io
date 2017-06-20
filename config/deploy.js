module.exports = function(deployTarget) {

  var ENV = {
    build: {
      environment: deployTarget
    },
    'revision-data': {
      type: 'git-commit'
    },
    'ssh-index': {
      remoteDir: "/var/www/keepcool",
      username: "keepcool",
      host: "54.145.243.75",
      allowOverwrite: true
    },
    rsync: {
      dest: "/var/www/keepcool",
      username: "www",
      host: "54.145.243.75",
      delete: false
    }
  };

  return ENV;

};
