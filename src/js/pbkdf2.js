(function() {
    window.pbkdf2 = function(passphrase, salt, opts, success, fail) {
        opts = opts || {};

        cordova.exec(
            success,
            fail,
            "Pbkdf2",
            "genKey",
            [
                passphrase,
                salt,
                opts.iterations || 10000,
                opts.keySize || 256
            ]
        );
    };
})();
