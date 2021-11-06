import { AntDesign } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Alert, Modal } from "react-native";
import { useTheme } from "styled-components/native";
import useBooks from "../../hooks/useBooks";

import * as S from "./styles";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const ModalAddBook: React.FC<Props> = ({ visible, onClose }) => {
  const theme = useTheme();
  const { addBook } = useBooks();

  const [titulo, setTitulo] = useState("");
  const [isbn, setIsbn] = useState("");
  const [autor, setAutor] = useState("");
  const [editora, setEditora] = useState("");
  const [idioma, setIdioma] = useState("");
  const [ano, setAno] = useState("");
  const [peso, setPeso] = useState("");
  const [comprimento, setComprimento] = useState("");
  const [largura, setLargura] = useState("");
  const [altura, setAltura] = useState("");

  function handleAddBook() {
    if (
      !titulo ||
      !isbn ||
      !autor ||
      !editora ||
      !idioma ||
      !ano ||
      !peso ||
      !comprimento ||
      !largura ||
      !altura
    ) {
      Alert.alert("Todos os campos são obrigatórios");
      return;
    }

    if (isbn.length < 13) {
      Alert.alert("ISBN deve ter 13 caracteres");
      return;
    }

    if (ano.length < 4) {
      Alert.alert("Ano deve ter 4 caracteres");
      return;
    }

    onClose();

    addBook({
      titulo,
      isbn,
      autor,
      editora,
      idioma,
      ano: Number(ano),
      peso: Number(peso),
      comprimento: Number(comprimento),
      largura: Number(largura),
      altura: Number(altura),
    });
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => onClose()}
    >
      <S.ModalContainer>
        <S.ModalContent>
          <S.WrapperCloseButon>
            <AntDesign
              name="close"
              size={24}
              onPress={() => onClose()}
              color={theme.colors.textBold}
            />
          </S.WrapperCloseButon>

          <S.TextInput
            onChangeText={setTitulo}
            value={titulo}
            placeholder="Titulo"
          />
          <S.TextInput
            onChangeText={setIsbn}
            value={isbn}
            placeholder="ISBN"
            maxLength={13}
            keyboardType="number-pad"
          />
          <S.TextInput
            onChangeText={setAutor}
            value={autor}
            placeholder="Autor"
            keyboardType="number-pad"
          />
          <S.TextInput
            onChangeText={setEditora}
            value={editora}
            placeholder="Editora"
          />
          <S.TextInput
            onChangeText={setIdioma}
            value={idioma}
            placeholder="Idioma"
          />
          <S.WrapperRow>
            <S.TextInput
              onChangeText={setAno}
              value={ano}
              small
              placeholder="Ano"
              maxLength={4}
              keyboardType="number-pad"
            />

            <S.TextInput
              onChangeText={setPeso}
              value={peso}
              small
              placeholder="Peso"
              keyboardType="number-pad"
            />
          </S.WrapperRow>
          <S.WrapperRow>
            <S.TextInput
              onChangeText={setComprimento}
              value={comprimento}
              extraSmall
              placeholder="Compr... cm"
              keyboardType="number-pad"
            />

            <S.TextInput
              onChangeText={setLargura}
              value={largura}
              extraSmall
              placeholder="Largura cm"
              keyboardType="number-pad"
            />
            <S.TextInput
              onChangeText={setAltura}
              value={altura}
              extraSmall
              placeholder="Altura cm"
              keyboardType="number-pad"
            />
          </S.WrapperRow>
          <S.ButtonAdd onPress={handleAddBook}>
            <S.ButtonAddText>ADICIONAR</S.ButtonAddText>
          </S.ButtonAdd>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};

export default ModalAddBook;
