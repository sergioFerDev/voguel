import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../../images/logo4.jpg";

const LogoContainer = styled.div`
  ${tw`
        font-family["ZCOOL KuaiLe"]
        font-black
        text-2xl
        text-white
    `};
`;

export function Logo() {
  return <LogoContainer>Voguel</LogoContainer>;
}