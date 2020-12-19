import "module-alias/register";

import { app } from "@/main/config/app";
import { env } from "@/main/config/env";

app.listen(env.port, () => console.log(`server running in http://localhost:${env.port}`));
