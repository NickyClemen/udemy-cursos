package com.zireael.springboot.backend.apirest.auth;

public class JwtConfig {
    public static final String SECRET_KEY = "clave.secreta.123456";

    public static final String RSA_PUBLICA = "-----BEGIN PUBLIC KEY-----\n" +
                                            "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqWrBERtaKkekbKO907yq\n" +
                                            "076w6xOS7hTqpbw4hVcQP6xnUeC3758v9XAHXm1ymjb/kAGNzLynZR3xkObqJSez\n" +
                                            "mZlMH0uELCjkNOFszZDuPDcRXUEwqYMLHOvS7lWzxgP3tbbCD0UEJ/P/oW5IXqd/\n" +
                                            "Jp6AD1rsYfly4Y6fnmf5W8UWmS3Ym/5iPx0hcsbyewLWRjg2vOxpQDYdEMvKKUR8\n" +
                                            "hRjHO16p0ip5s9in0l3VIZ7NUQFCM+B3CNgb8YNY74ru4OUadwoeODqkIMJQWROa\n" +
                                            "PLJByNcBbaeV1GdCZGPc3dIkVj8ITydAgigPcok/4bWxdoejkkMijNyOYzvmArtd\n" +
                                            "2QIDAQAB\n" +
                                            "-----END PUBLIC KEY-----";

    public static final String RSA_PRIVADA = "-----BEGIN RSA PRIVATE KEY-----\n" +
                                            "MIIEpAIBAAKCAQEAqWrBERtaKkekbKO907yq076w6xOS7hTqpbw4hVcQP6xnUeC3\n" +
                                            "758v9XAHXm1ymjb/kAGNzLynZR3xkObqJSezmZlMH0uELCjkNOFszZDuPDcRXUEw\n" +
                                            "qYMLHOvS7lWzxgP3tbbCD0UEJ/P/oW5IXqd/Jp6AD1rsYfly4Y6fnmf5W8UWmS3Y\n" +
                                            "m/5iPx0hcsbyewLWRjg2vOxpQDYdEMvKKUR8hRjHO16p0ip5s9in0l3VIZ7NUQFC\n" +
                                            "M+B3CNgb8YNY74ru4OUadwoeODqkIMJQWROaPLJByNcBbaeV1GdCZGPc3dIkVj8I\n" +
                                            "TydAgigPcok/4bWxdoejkkMijNyOYzvmArtd2QIDAQABAoIBAAP5JfgBvTaaoYeO\n" +
                                            "u4f4t8TphvqsZdjBktM6O9UcupvTrkSkUYwEHrrR2spjJLnrKkk1UB8KGZ7sedrd\n" +
                                            "H4apjLPAfaGKQtpKRzfaRZP4ny24WObn/X0sPpl6CmNejS3KsAeJ9rkm9Db/qPIf\n" +
                                            "RQE7SmccdoJlrn+JuyEBGEs9wwJc7iq/CfNQWczO+vZSwfI2clQ3rYpmpmGcKZtB\n" +
                                            "xjhEvSb9DwCYk/vBkBDjBaVrK4mrIUI32cd/AD96Ca5hY5ptgv0XPZJWyTL40/pO\n" +
                                            "FpgX768bffUD6TXFJOf09xwnC1pBrEihMlBAfrQn4FkvtysgBjwPhDne531WTMJ1\n" +
                                            "1LkjndECgYEA034RHqi1VN6WKMojUbQmcDkAuDJx60zZTmmNmTjCy9RywDO2LvTp\n" +
                                            "MHXzfCiNRz9sMZ6PYzfXlV6bcIIVwnleEPV88PBACGAzFqmR3WhVAbcYBh8D4gxW\n" +
                                            "SdMmU0DhzmAmxfFblomEyLyHLOvnumXiG9lKYT3R/gqNmfs58JDulB0CgYEAzRHq\n" +
                                            "zzYGaPUiPeV6xsHMfEKDptW7JyFomMj9p1rxtrtF7MVwFjUbVyhk/55aTh5hbFYn\n" +
                                            "QNzsxppdydiDviILUb5l4vnSUtgxCLJOcj5wWbjfgrMB405FW8+kBm/uvCk4WoNJ\n" +
                                            "4x+bpXeVJE5S2MoTpkGB1VYV+anRWoviyCVLC+0CgYAPyxRAM90Gr3CLLz0f9tIA\n" +
                                            "A2G4X5v+NEjuABfg30o8qmq/S51JOGTJh6VdGjIipevQcMTIZf0lXGFDL5OsaB/M\n" +
                                            "KGjiHS7K8VQfVx5baFUgwal7m4lQshcngCsWgHvcS3XZxkJOpYpS6zE0+5DcbItM\n" +
                                            "BRf21wT9cZBNdWNIQapvSQKBgQCfRQ8tqDQKSHkzwYs92z7KM460gMM+fQATyebX\n" +
                                            "mBaraX/BiQao+M4nP0RSE9bnXUklLzSFeBCdnz7AidyoSyCneE0BoC3uEeLjcjjj\n" +
                                            "GgOAa8mMZSNOO3g6+mXWahDtKsaN5fH46I+mT94RuJM3tJrWQYJpAtdGdNIYlRSp\n" +
                                            "he1ncQKBgQDNCiLd/JoNaYYBlX6Yui+8Ej1sYLdaiydICET6kS/28n2m0EUY60a/\n" +
                                            "LgQaC+czU64N6VkDd8w0KyawfeneF+WNNtWoOogTb49oRMCipxtEoGjwLLsgM26G\n" +
                                            "BtUzPk/1vVFrZ5YycfDIw2UM0YDsQmnebVuBlnCt+Qn0ai3ew0KJzA==\n" +
                                            "-----END RSA PRIVATE KEY-----";
}
