import { Prisma } from "@prisma/client";

export const dataProduct: Omit<Prisma.ProductItemInfoUncheckedCreateInput, 'price'>[] = [
    {
        productId: 1,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },] },
        imagesUrl: { connect: [{ id: 1 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 2,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },] },
        imagesUrl: { connect: [{ id: 2 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 3,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },] },
        imagesUrl: { connect: [{ id: 3 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 4,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },] },
        imagesUrl: { connect: [{ id: 4 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '12 MP',
        mainCamera: '48-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.7',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 5,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 },] },
        imagesUrl: { connect: [{ id: 5 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 6,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 },] },
        imagesUrl: { connect: [{ id: 6 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 7,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 },] },
        imagesUrl: { connect: [{ id: 7 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 8,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 },] },
        imagesUrl: { connect: [{ id: 8 }] },
        CPU: 'Apple A15 Bionic',
        frontCamera: '11 MP',
        mainCamera: '44-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 9,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 4 }, { id: 5 }, { id: 7 }] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 },] },
        imagesUrl: { connect: [{ id: 9 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '11 MP',
        mainCamera: '46-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.2',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 10,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 4 }, { id: 5 }, { id: 7 }] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 },] },
        imagesUrl: { connect: [{ id: 10 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '11 MP',
        mainCamera: '46-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.2',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 11,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 4 }, { id: 5 }, { id: 7 }] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 },] },
        imagesUrl: { connect: [{ id: 11 }] },
        CPU: 'Apple A16 Bionic',
        frontCamera: '11 MP',
        mainCamera: '46-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.2',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 12,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 5 }, { id: 8 }, { id: 9 }] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 },] },
        imagesUrl: { connect: [{ id: 12 }] },
        CPU: 'Apple A13 Bionic',
        frontCamera: '11 MP',
        mainCamera: '42-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.2',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 13,
        battery: 4321,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 5 }, { id: 8 }, { id: 9 }] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 },] },
        imagesUrl: { connect: [{ id: 13 }] },
        CPU: 'Apple A13 Bionic',
        frontCamera: '11 MP',
        mainCamera: '42-12 -12 MP',
        screenResolution: '2796x1290',
        screenSize: '6.2',
        screenTypeId: 1,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 1
    },
    {
        productId: 14,
        battery: 5000,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 2 }, { id: 10 }] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] },
        imagesUrl: { connect: [{ id: 14 }] },
        CPU: 'Apple A13 Bionic',
        frontCamera: '12 MP',
        mainCamera: '200+10+10+12 Mp',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    {
        productId: 15,
        battery: 5000,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 2 }, { id: 10 }] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] },
        imagesUrl: { connect: [{ id: 15 }] },
        CPU: 'Apple A13 Bionic',
        frontCamera: '12 MP',
        mainCamera: '200+10+10+12 Mp',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },
    {
        productId: 16,
        battery: 5000,
        cores: 6,
        colors: { connect: [{ id: 1 }, { id: 2 }, { id: 10 }] },
        memory: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] },
        imagesUrl: { connect: [{ id: 16 }] },
        CPU: 'Apple A13 Bionic',
        frontCamera: '12 MP',
        mainCamera: '200+10+10+12 Mp',
        screenResolution: '3088х1440 Quad HD+',
        screenSize: '6,8',
        screenTypeId: 2,
        description: 'Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...',
        brandId: 2
    },


]