const { express } = require("../model");
const router = express.Router();
const { register, login, currentUser } = require("../controllers");
const { auth, checkAdmin } = require("../middlewares");

router.post("/register", register);
router.post("/login", login);
router.post("/current-user", auth, currentUser);
router.post("/current-admin", auth, checkAdmin, currentUser);

module.exports = router;
