import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

const authenticateUserController    = new AuthenticateUserController();
const createMessageController       = new CreateMessageController();
const getLast3MessagesController    = new GetLast3MessagesController();
const profileUserController         = new ProfileUserController();

router.post("/authenticate", authenticateUserController.handle);

router.post("/messages", ensureAuthenticated , createMessageController.handle);
router.get("/messages/last3", getLast3MessagesController.handle);
router.get("/profile", ensureAuthenticated ,profileUserController.handle)

export { router }