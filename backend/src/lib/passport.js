const passport = require("passport");
const mysqlConnection = require("../db/db");
const LocalStrategy = require("passport-local").Strategy;

const MySQLconnection = require("../db/db");
const helpers = require("../lib/helpers");

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      await MySQLconnection.query(
        "SELECT * FROM usuario_registrado WHERE nombre_completo = ?",
        [username]
      );
      if (rows.length > 0) {
        const user = rows[0];
        const validPassword = await helpers.matchPassword(
          password,
          user.contraseña
        );
        if (validPassword) {
          done(
            null,
            user,
            req.flash("success", `Bienvenido ${user.nombre_completo}`)
          );
        } else {
          done(null, false, req.flash("message", `Contraseña incorrecta`));
        }
      } else {
        return done(null, false, req.flash("message", "El nombre no existe"));
      }
    }
  )
);


passport.use(
    'local.signup',
    new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    async (req, username, password, done) => {
        const {Foto_perfil,Telefono,Direccion,tipo_usuario} = req.body;
        const newUser = {
            username,
            password,
            Foto_perfil,
            Telefono,
            Direccion,
            tipo_usuario
        };
        newUser.password = await helpers.encryptPassword(password);
        const result = await MySQLconnection.query('INSERT INTO usuario_registrado(username,password,Foto_perfil,Telefono,Direccion,tipo_usuario) VALUES(?,?,?,?,?,?)',[newUser]);
        newUser.id = result.insertId;
        return done(null, newUser);
    })
);

passport.serializeUser((user,done)=>{
    done(null, user.id);
});

passport.deserializeUser(async (id,done)=>{
    const rows = await MySQLconnection.query('SELECT * FROM usuario_registrado WHERE id = ?', [id]);
    done(null, rows);
});

