import { Container, Factory } from "simple-typescript-ioc";
import { ContainerTypes } from "./ContainerTypes";
import { Fruit } from "./Modules/Fruit/Fruit";
import { Seed } from "./Modules/Fruit/Seed/Seed";
import { Skin } from "./Modules/Fruit/Skin/Skin";
import { Vegetable } from "./Modules/Vegetable/Vegetable";
import { LogService } from "./Services/LogService";

const container = new Container();

container.registerSingleton(ContainerTypes.ILogService, LogService);

container.register(ContainerTypes.Fruit, Fruit, ContainerTypes.ILogService, ContainerTypes.Skin, Factory(ContainerTypes.Seed));
container.register(ContainerTypes.Skin, Skin, ContainerTypes.ILogService);
container.register(ContainerTypes.Seed, Seed, ContainerTypes.ILogService);

container.register(ContainerTypes.Vegetable, Vegetable, ContainerTypes.ILogService);

const fruit = container.resolve(ContainerTypes.Fruit) as Fruit;
fruit.init();

const vegetable = container.resolve(ContainerTypes.Vegetable) as Vegetable;
vegetable.init();
