import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/appError";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();

    // verificando se os grupos do storedGroups é igual ao newGroup passado pelo argumento
    const groupAlreadyExists = storedGroups.includes(newGroup)

    if(groupAlreadyExists) {
      throw new AppError('Já existe um grupo com esse nome')
    }

    const storage = JSON.stringify([...storedGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
    // lançando o error para o local que chamou a função, e la vamos tratar e exibir esse error da melhor maneira
  }
}
