const surgery = [
  {
    Name: "Lasek",
    Summary: [
      "가장 앞쪽에 있는 상피만을 벗긴 후 각막실질을 노출시켜 레이저로 조사한 후 굴절이상을 교정하는 수술입니다.",
    ],
    Process_img: [
      { id: 1, src: "/Lasek/lasek_process1.png" },
      { id: 2, src: "/Lasek/lasek_process2.png" },
      { id: 3, src: "/Lasek/lasek_process3.png" },
    ],
    Pluses: [
      "1. 라식에비해 잔여각막두께를 더 남길 수 있어 저도수부터 고도근시 교정까지 수술이 가능",
      "2. 수술 후 충분한 안정기간이 경과하면 외부 충격으로부터 안전함",
      "3. 각막 크기와 모양에 관계없이 수술이 가능",
      "4. 빛번짐, 눈부심의 우려가 적음",
    ],
    Recommendation: [
      "1. 각막이 너무 얇은 경우",
      "2. 근시가 심한 경우",
      "3. 눈이 너무 작아 각막 절편을 만들기 어려운 경우",
      "4. 안구건조증과 빛번짐에 민감하신 경우",
      "5. 눈에 충격을 받을 수 있는 직업이나 스포츠를 즐기시는 경우",
    ],
  },
  {
    Name: "Lasik",
    Summary: [
      "정교한 레이저를 이용하여 각막절편을 만들고, 각막절편을 열어 각막의 실질부위에 레이저를 조사하여 굴절이상을 교정하는 수술입니다.",
    ],
    Process_img: [
      { id: 1, src: "/Lasik/lasik_process1.png" },
      { id: 2, src: "/Lasik/lasik_process2.png" },
      { id: 3, src: "/Lasik/lasik_process3.png" },
    ],
    Pluses: [
      "1. 수술 다음날부터 통증이 거의 없고 회복이 빨라서 거의 모든 일상생활이 가능",
      "2. 정교한 레이저 사용으로 각막절편이 견고함",
      "3. 각막혼탁, 근시 재발의 가능성이 매우 적음",
      "4. 재수술이나 추가교정이 필요한 경우 수술이 용이함",
    ],
    Recommendation: [
      "1. 근시가 심하지 않은 경우",
      "2. 빠른 회복을 원하는 경우",
      "3. 난시 교정이 필요한 경우",
      "4. 각막 두께가 충분한 경우",
      "5. 통증 없는 수술을 원하는 경우",
    ],
  },
  {
    Name: "Smile",
    Process_img: [
      { id: 1, src: "/Smile/smile_process1.png" , txt: "레이저로 각막 굴절삭제량 커팅",},
      { id: 2, src: "/Smile/smile_process2.png" , txt: "레이저로 각막 2~4mm 최소절개",},
      { id: 3, src: "/Smile/smile_process3.png" ,txt: "최소 절개창을 통한 각막실질 제거"},
    ],
    Pluses: [
      "스마일 수술의 장점",
      "스마일 라식은 2~4mm 최소절개로 손상되는 신경은 라식에 비해 훨씬 적습니다.",
      "수술 후 안구건조증의 발생 위험이 적고, 각막 민감도와 눈물막이 신속하게 회복됩니다.",
      "적은 통증과 빠른 회복으로, 수술 다음날부터 일상생활 가능",
      "각막신경 손상을 줄이므로 안구 건조증 최소화",
      "최소한의 절개로 적은 각막 손상과 외부 충격에 강함",
      "짧은 안약 사용으로 안압 상승 최소화",
      "눈부심, 빛 번짐 최소화",
    ],
    Recommendation: [
      "스마일라식 추천대상",
      "수술 전 안전한 시력교정을 위해 전문의료진과의 충분한 상담과 검사를 통해 자신의 눈에",
      "적합한 수술법을 찾는 것이 중요합니다.",
      "빠른 회복을 원하시는 경우",
      "안구건조증이 있으신 경우",
      "수술이 어려운 고도근시나 난시가 있으신 경우",
      "각막혼탁이나 퇴행이 걱정되는 경우",
    ],
  },
  {
    Name: "Lens Implantation",
    Summary:
      "눈 안에 적합한 렌즈를 삽입하여 시력을 교정하는 수술로 수술 과정이나 후에도 각막에 손상을 주지 않아 안전하게 시력교정이 가능한 수술입니다.",
      Pluses: [
      "1. 각막을 그대로 보존하여 안전한 수술이 가능합니다.",
      "2. 초고도 근시 및 각막이 얇은 경우에도 수술이 가능합니다.",
      "3. 각막혼탁, 각막이영양증 등 각막질환이 있어도 수술이 가능합니다.",
      "4. 근시 퇴행이 거의 없어 안정적인 시력이 유지됩니다.",
      "5. 일상생활로 복귀가 빠릅니다.",
      "6. 야간 눈부심, 빛 번짐이 적습니다.",
      "7. 렌즈를 제거하여 수술 전 상태로 복원이 가능합니다.",
    ],
    ICL: [
      "1. 가장 많은 수술이 진행되고 있는 대표 렌즈로 홍채 절개술 없이 수술이 가능합니다.",
      "2. 렌즈 중앙에 작은 구멍(360㎛)이 뚫려있어 자연스러운 방수의 흐름이 가능합니다. 따라서 안압 상승 위험 부담이 거의 없습니다.",
      "3. 자외선차단 기능으로 망막 손상 및 백내장 같은 질병으로부터 눈을 보호해줍니다.",
      "4. 넓은 광학부로 야간 빛 번짐이 줄었습니다.",
    ],
    MPL: [
      "1. 검은 동자가 작은 경우, 전방 깊이가 얕은 경우에도 수술이 가능합니다.",
      "2. 렌즈 중앙에 작은 구멍(380㎛)이 뚫려있어 자연스러운 방수의 흐름이 가능합니다. 따라서 안압 상승 위험 부담이 거의 없습니다.",
      "3. 가벼운 렌즈 디자인으로 수술 후 이물감이 느껴지지 않습니다.",
    ],
  },
];

export default surgery;
