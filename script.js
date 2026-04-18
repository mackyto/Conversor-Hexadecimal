/* ══════════════════════════════════════════════
   METADATOS DE PROCESADORES
══════════════════════════════════════════════ */
const processorMeta = {
    z80: {
        badge:     'ZILOG Z80',
        subtitle:  'CPU · 8-BIT · 1976',
        icon:      '🟢',
        infoName:  'ZILOG Z80',
        infoDesc:  'Instrucciones de 8 bits · sin prefijos CB/ED/DD/FD · 256 opcodes base',
        bodyClass: 'proc-z80',
        bgId:      'bg-z80'
    },
    '8080': {
        badge:     'INTEL 8080',
        subtitle:  'CPU · 8-BIT · 1974',
        icon:      '🟠',
        infoName:  'INTEL 8080',
        infoDesc:  'Predecesor del x86 · instrucciones de 8 bits · base de CP/M',
        bodyClass: 'proc-8080',
        bgId:      'bg-8080'
    },
    '6502': {
        badge:     'MOS 6502',
        subtitle:  'CPU · 8-BIT · 1975',
        icon:      '🔴',
        infoName:  'MOS TECHNOLOGY 6502',
        infoDesc:  'Apple II, Commodore 64, NES · 56 instrucciones oficiales',
        bodyClass: 'proc-6502',
        bgId:      'bg-6502'
    },
    pic16: {
        badge:     'PIC16 MCU',
        subtitle:  'MCU · 8-BIT · MICROCHIP',
        icon:      '🔵',
        infoName:  'MICROCHIP PIC16',
        infoDesc:  'Microcontrolador mid-range · instrucciones de 14 bits · representación simplificada',
        bodyClass: 'proc-pic16',
        bgId:      'bg-pic16'
    }
};

/* ══════════════════════════════════════════════
   TABLAS DE OPCODES
══════════════════════════════════════════════ */
const i8080Opcodes = {
    0x00:'NOP',      0x01:'LXI B,d16', 0x02:'STAX B',   0x03:'INX B',    0x04:'INR B',    0x05:'DCR B',    0x06:'MVI B,d8', 0x07:'RLC',
    0x09:'DAD B',    0x0A:'LDAX B',    0x0B:'DCX B',    0x0C:'INR C',    0x0D:'DCR C',    0x0E:'MVI C,d8', 0x0F:'RRC',
    0x11:'LXI D,d16',0x12:'STAX D',   0x13:'INX D',    0x14:'INR D',    0x15:'DCR D',    0x16:'MVI D,d8', 0x17:'RAL',
    0x19:'DAD D',    0x1A:'LDAX D',    0x1B:'DCX D',    0x1C:'INR E',    0x1D:'DCR E',    0x1E:'MVI E,d8', 0x1F:'RAR',
    0x21:'LXI H,d16',0x22:'SHLD addr',0x23:'INX H',    0x24:'INR H',    0x25:'DCR H',    0x26:'MVI H,d8', 0x27:'DAA',
    0x29:'DAD H',    0x2A:'LHLD addr', 0x2B:'DCX H',    0x2C:'INR L',    0x2D:'DCR L',    0x2E:'MVI L,d8', 0x2F:'CMA',
    0x31:'LXI SP,d16',0x32:'STA addr',0x33:'INX SP',   0x34:'INR M',    0x35:'DCR M',    0x36:'MVI M,d8', 0x37:'STC',
    0x39:'DAD SP',   0x3A:'LDA addr',  0x3B:'DCX SP',   0x3C:'INR A',    0x3D:'DCR A',    0x3E:'MVI A,d8', 0x3F:'CMC',
    0x40:'MOV B,B',  0x41:'MOV B,C',   0x42:'MOV B,D',  0x43:'MOV B,E',  0x44:'MOV B,H',  0x45:'MOV B,L',  0x46:'MOV B,M',  0x47:'MOV B,A',
    0x48:'MOV C,B',  0x49:'MOV C,C',   0x4A:'MOV C,D',  0x4B:'MOV C,E',  0x4C:'MOV C,H',  0x4D:'MOV C,L',  0x4E:'MOV C,M',  0x4F:'MOV C,A',
    0x50:'MOV D,B',  0x51:'MOV D,C',   0x52:'MOV D,D',  0x53:'MOV D,E',  0x54:'MOV D,H',  0x55:'MOV D,L',  0x56:'MOV D,M',  0x57:'MOV D,A',
    0x58:'MOV E,B',  0x59:'MOV E,C',   0x5A:'MOV E,D',  0x5B:'MOV E,E',  0x5C:'MOV E,H',  0x5D:'MOV E,L',  0x5E:'MOV E,M',  0x5F:'MOV E,A',
    0x60:'MOV H,B',  0x61:'MOV H,C',   0x62:'MOV H,D',  0x63:'MOV H,E',  0x64:'MOV H,H',  0x65:'MOV H,L',  0x66:'MOV H,M',  0x67:'MOV H,A',
    0x68:'MOV L,B',  0x69:'MOV L,C',   0x6A:'MOV L,D',  0x6B:'MOV L,E',  0x6C:'MOV L,H',  0x6D:'MOV L,L',  0x6E:'MOV L,M',  0x6F:'MOV L,A',
    0x70:'MOV M,B',  0x71:'MOV M,C',   0x72:'MOV M,D',  0x73:'MOV M,E',  0x74:'MOV M,H',  0x75:'MOV M,L',  0x76:'HLT',      0x77:'MOV M,A',
    0x78:'MOV A,B',  0x79:'MOV A,C',   0x7A:'MOV A,D',  0x7B:'MOV A,E',  0x7C:'MOV A,H',  0x7D:'MOV A,L',  0x7E:'MOV A,M',  0x7F:'MOV A,A',
    0x80:'ADD B',    0x81:'ADD C',      0x82:'ADD D',    0x83:'ADD E',    0x84:'ADD H',    0x85:'ADD L',    0x86:'ADD M',    0x87:'ADD A',
    0x88:'ADC B',    0x89:'ADC C',      0x8A:'ADC D',    0x8B:'ADC E',    0x8C:'ADC H',    0x8D:'ADC L',    0x8E:'ADC M',    0x8F:'ADC A',
    0x90:'SUB B',    0x91:'SUB C',      0x92:'SUB D',    0x93:'SUB E',    0x94:'SUB H',    0x95:'SUB L',    0x96:'SUB M',    0x97:'SUB A',
    0x98:'SBB B',    0x99:'SBB C',      0x9A:'SBB D',    0x9B:'SBB E',    0x9C:'SBB H',    0x9D:'SBB L',    0x9E:'SBB M',    0x9F:'SBB A',
    0xA0:'ANA B',    0xA1:'ANA C',      0xA2:'ANA D',    0xA3:'ANA E',    0xA4:'ANA H',    0xA5:'ANA L',    0xA6:'ANA M',    0xA7:'ANA A',
    0xA8:'XRA B',    0xA9:'XRA C',      0xAA:'XRA D',    0xAB:'XRA E',    0xAC:'XRA H',    0xAD:'XRA L',    0xAE:'XRA M',    0xAF:'XRA A',
    0xB0:'ORA B',    0xB1:'ORA C',      0xB2:'ORA D',    0xB3:'ORA E',    0xB4:'ORA H',    0xB5:'ORA L',    0xB6:'ORA M',    0xB7:'ORA A',
    0xB8:'CMP B',    0xB9:'CMP C',      0xBA:'CMP D',    0xBB:'CMP E',    0xBC:'CMP H',    0xBD:'CMP L',    0xBE:'CMP M',    0xBF:'CMP A',
    0xC0:'RNZ',      0xC1:'POP B',      0xC2:'JNZ addr', 0xC3:'JMP addr', 0xC4:'CNZ addr', 0xC5:'PUSH B',   0xC6:'ADI d8',   0xC7:'RST 0',
    0xC8:'RZ',       0xC9:'RET',        0xCA:'JZ addr',  0xCC:'CZ addr',  0xCD:'CALL addr',0xCE:'ACI d8',   0xCF:'RST 1',
    0xD0:'RNC',      0xD1:'POP D',      0xD2:'JNC addr', 0xD3:'OUT d8',   0xD4:'CNC addr', 0xD5:'PUSH D',   0xD6:'SUI d8',   0xD7:'RST 2',
    0xD8:'RC',       0xDA:'JC addr',    0xDB:'IN d8',    0xDC:'CC addr',  0xDE:'SBI d8',   0xDF:'RST 3',
    0xE0:'RPO',      0xE1:'POP H',      0xE2:'JPO addr', 0xE3:'XTHL',     0xE4:'CPO addr', 0xE5:'PUSH H',   0xE6:'ANI d8',   0xE7:'RST 4',
    0xE8:'RPE',      0xE9:'PCHL',       0xEA:'JPE addr', 0xEB:'XCHG',     0xEC:'CPE addr', 0xEE:'XRI d8',   0xEF:'RST 5',
    0xF0:'RP',       0xF1:'POP PSW',    0xF2:'JP addr',  0xF3:'DI',       0xF4:'CP addr',  0xF5:'PUSH PSW', 0xF6:'ORI d8',   0xF7:'RST 6',
    0xF8:'RM',       0xF9:'SPHL',       0xFA:'JM addr',  0xFB:'EI',       0xFC:'CM addr',  0xFE:'CPI d8',   0xFF:'RST 7'
};

const mos6502Opcodes = {
    0x00:'BRK',         0x01:'ORA (d8,X)',  0x05:'ORA d8',    0x06:'ASL d8',    0x08:'PHP',       0x09:'ORA #d8',   0x0A:'ASL A',     0x0D:'ORA d16',   0x0E:'ASL d16',
    0x10:'BPL d8',      0x11:'ORA (d8),Y', 0x15:'ORA d8,X',  0x16:'ASL d8,X',  0x18:'CLC',       0x19:'ORA d16,Y', 0x1D:'ORA d16,X', 0x1E:'ASL d16,X',
    0x20:'JSR d16',     0x21:'AND (d8,X)', 0x24:'BIT d8',    0x25:'AND d8',    0x26:'ROL d8',    0x28:'PLP',       0x29:'AND #d8',   0x2A:'ROL A',     0x2C:'BIT d16',   0x2D:'AND d16',   0x2E:'ROL d16',
    0x30:'BMI d8',      0x31:'AND (d8),Y', 0x35:'AND d8,X',  0x36:'ROL d8,X',  0x38:'SEC',       0x39:'AND d16,Y', 0x3D:'AND d16,X', 0x3E:'ROL d16,X',
    0x40:'RTI',         0x41:'EOR (d8,X)', 0x45:'EOR d8',    0x46:'LSR d8',    0x48:'PHA',       0x49:'EOR #d8',   0x4A:'LSR A',     0x4C:'JMP d16',   0x4D:'EOR d16',   0x4E:'LSR d16',
    0x50:'BVC d8',      0x51:'EOR (d8),Y', 0x55:'EOR d8,X',  0x56:'LSR d8,X',  0x58:'CLI',       0x59:'EOR d16,Y', 0x5D:'EOR d16,X', 0x5E:'LSR d16,X',
    0x60:'RTS',         0x61:'ADC (d8,X)', 0x65:'ADC d8',    0x66:'ROR d8',    0x68:'PLA',       0x69:'ADC #d8',   0x6A:'ROR A',     0x6C:'JMP (d16)', 0x6D:'ADC d16',   0x6E:'ROR d16',
    0x70:'BVS d8',      0x71:'ADC (d8),Y', 0x75:'ADC d8,X',  0x76:'ROR d8,X',  0x78:'SEI',       0x79:'ADC d16,Y', 0x7D:'ADC d16,X', 0x7E:'ROR d16,X',
    0x81:'STA (d8,X)',  0x84:'STY d8',     0x85:'STA d8',    0x86:'STX d8',    0x88:'DEY',       0x8A:'TXA',       0x8C:'STY d16',   0x8D:'STA d16',   0x8E:'STX d16',
    0x90:'BCC d8',      0x91:'STA (d8),Y', 0x94:'STY d8,X',  0x95:'STA d8,X',  0x96:'STX d8,Y',  0x98:'TYA',       0x99:'STA d16,Y', 0x9A:'TXS',       0x9D:'STA d16,X',
    0xA0:'LDY #d8',     0xA1:'LDA (d8,X)', 0xA2:'LDX #d8',   0xA4:'LDY d8',    0xA5:'LDA d8',    0xA6:'LDX d8',    0xA8:'TAY',       0xA9:'LDA #d8',   0xAA:'TAX',       0xAC:'LDY d16',   0xAD:'LDA d16',   0xAE:'LDX d16',
    0xB0:'BCS d8',      0xB1:'LDA (d8),Y', 0xB4:'LDY d8,X',  0xB5:'LDA d8,X',  0xB6:'LDX d8,Y',  0xB8:'CLV',       0xB9:'LDA d16,Y', 0xBA:'TSX',       0xBC:'LDY d16,X', 0xBD:'LDA d16,X', 0xBE:'LDX d16,Y',
    0xC0:'CPY #d8',     0xC1:'CMP (d8,X)', 0xC4:'CPY d8',    0xC5:'CMP d8',    0xC6:'DEC d8',    0xC8:'INY',       0xC9:'CMP #d8',   0xCA:'DEX',       0xCC:'CPY d16',   0xCD:'CMP d16',   0xCE:'DEC d16',
    0xD0:'BNE d8',      0xD1:'CMP (d8),Y', 0xD5:'CMP d8,X',  0xD6:'DEC d8,X',  0xD8:'CLD',       0xD9:'CMP d16,Y', 0xDD:'CMP d16,X', 0xDE:'DEC d16,X',
    0xE0:'CPX #d8',     0xE1:'SBC (d8,X)', 0xE4:'CPX d8',    0xE5:'SBC d8',    0xE6:'INC d8',    0xE8:'INX',       0xE9:'SBC #d8',   0xEA:'NOP',       0xEC:'CPX d16',   0xED:'SBC d16',   0xEE:'INC d16',
    0xF0:'BEQ d8',      0xF1:'SBC (d8),Y', 0xF5:'SBC d8,X',  0xF6:'INC d8,X',  0xF8:'SED',       0xF9:'SBC d16,Y', 0xFD:'SBC d16,X', 0xFE:'INC d16,X'
};

const pic16Opcodes = {
    0x00:'NOP',        0x01:'MOVWF f',     0x02:'CLRW',       0x03:'CLRF f',     0x04:'SUBWF f,d',  0x05:'DECF f,d',   0x06:'IORWF f,d',  0x07:'ANDWF f,d',
    0x08:'XORWF f,d',  0x09:'ADDWF f,d',   0x0A:'MOVF f,d',   0x0B:'COMF f,d',   0x0C:'INCF f,d',   0x0D:'DECFSZ f,d', 0x0E:'RRF f,d',    0x0F:'RLF f,d',
    0x10:'SWAPF f,d',  0x11:'INCFSZ f,d',  0x12:'BCF f,b',    0x13:'BSF f,b',    0x14:'BTFSC f,b',  0x15:'BTFSS f,b',
    0x20:'CALL k',     0x21:'GOTO k',       0x22:'MOVLW k',    0x23:'RETLW k',    0x24:'IORLW k',    0x25:'ANDLW k',    0x26:'XORLW k',    0x27:'SUBLW k',    0x28:'ADDLW k',
    0x30:'RETURN',     0x31:'RETFIE',       0x32:'SLEEP',      0x33:'CLRWDT',     0x40:'TRIS f',     0x41:'OPTION',
    0x50:'MOVWF INDF', 0x51:'MOVWF TMR0',  0x52:'MOVWF PCL',  0x53:'MOVWF STATUS',0x54:'MOVWF FSR', 0x55:'MOVWF PORTA',0x56:'MOVWF PORTB',
    0x60:'CLRF INDF',  0x61:'CLRF TMR0',   0x62:'CLRF PCL',   0x63:'CLRF STATUS',0x64:'CLRF FSR',   0x65:'CLRF PORTA', 0x66:'CLRF PORTB',
    0x70:'SUBWF PORTA',0x71:'SUBWF PORTB', 0x72:'DECF PORTA', 0x73:'DECF PORTB',
    0x80:'MOVF STATUS,W',0x81:'MOVF PORTA,W',0x82:'MOVF PORTB,W',
    0x90:'INCF PORTA', 0x91:'INCF PORTB',  0x92:'INCF STATUS',
    0xA0:'BCF STATUS,0',0xA1:'BCF STATUS,1',0xA2:'BCF STATUS,2',0xA3:'BSF STATUS,0',0xA4:'BSF STATUS,1',0xA5:'BSF STATUS,2',
    0xB0:'BTFSC STATUS,0',0xB1:'BTFSC STATUS,1',0xB2:'BTFSC STATUS,2',0xB3:'BTFSS STATUS,0',0xB4:'BTFSS STATUS,1',0xB5:'BTFSS STATUS,2'
};

const z80Opcodes = {
    0x00:'NOP',         0x01:'LD BC,nn',    0x02:'LD (BC),A',  0x03:'INC BC',     0x04:'INC B',      0x05:'DEC B',      0x06:'LD B,n',     0x07:'RLCA',
    0x08:"EX AF,AF'",   0x09:'ADD HL,BC',   0x0A:'LD A,(BC)',  0x0B:'DEC BC',     0x0C:'INC C',      0x0D:'DEC C',      0x0E:'LD C,n',     0x0F:'RRCA',
    0x10:'DJNZ d',      0x11:'LD DE,nn',    0x12:'LD (DE),A',  0x13:'INC DE',     0x14:'INC D',      0x15:'DEC D',      0x16:'LD D,n',     0x17:'RLA',
    0x18:'JR d',        0x19:'ADD HL,DE',   0x1A:'LD A,(DE)',  0x1B:'DEC DE',     0x1C:'INC E',      0x1D:'DEC E',      0x1E:'LD E,n',     0x1F:'RRA',
    0x20:'JR NZ,d',     0x21:'LD HL,nn',    0x22:'LD (nn),HL', 0x23:'INC HL',     0x24:'INC H',      0x25:'DEC H',      0x26:'LD H,n',     0x27:'DAA',
    0x28:'JR Z,d',      0x29:'ADD HL,HL',   0x2A:'LD HL,(nn)', 0x2B:'DEC HL',     0x2C:'INC L',      0x2D:'DEC L',      0x2E:'LD L,n',     0x2F:'CPL',
    0x30:'JR NC,d',     0x31:'LD SP,nn',    0x32:'LD (nn),A',  0x33:'INC SP',     0x34:'INC (HL)',   0x35:'DEC (HL)',   0x36:'LD (HL),n',  0x37:'SCF',
    0x38:'JR C,d',      0x39:'ADD HL,SP',   0x3A:'LD A,(nn)',  0x3B:'DEC SP',     0x3C:'INC A',      0x3D:'DEC A',      0x3E:'LD A,n',     0x3F:'CCF',
    0x40:'LD B,B',      0x41:'LD B,C',      0x42:'LD B,D',     0x43:'LD B,E',     0x44:'LD B,H',     0x45:'LD B,L',     0x46:'LD B,(HL)',  0x47:'LD B,A',
    0x48:'LD C,B',      0x49:'LD C,C',      0x4A:'LD C,D',     0x4B:'LD C,E',     0x4C:'LD C,H',     0x4D:'LD C,L',     0x4E:'LD C,(HL)', 0x4F:'LD C,A',
    0x50:'LD D,B',      0x51:'LD D,C',      0x52:'LD D,D',     0x53:'LD D,E',     0x54:'LD D,H',     0x55:'LD D,L',     0x56:'LD D,(HL)', 0x57:'LD D,A',
    0x58:'LD E,B',      0x59:'LD E,C',      0x5A:'LD E,D',     0x5B:'LD E,E',     0x5C:'LD E,H',     0x5D:'LD E,L',     0x5E:'LD E,(HL)', 0x5F:'LD E,A',
    0x60:'LD H,B',      0x61:'LD H,C',      0x62:'LD H,D',     0x63:'LD H,E',     0x64:'LD H,H',     0x65:'LD H,L',     0x66:'LD H,(HL)', 0x67:'LD H,A',
    0x68:'LD L,B',      0x69:'LD L,C',      0x6A:'LD L,D',     0x6B:'LD L,E',     0x6C:'LD L,H',     0x6D:'LD L,L',     0x6E:'LD L,(HL)', 0x6F:'LD L,A',
    0x70:'LD (HL),B',   0x71:'LD (HL),C',   0x72:'LD (HL),D',  0x73:'LD (HL),E',  0x74:'LD (HL),H',  0x75:'LD (HL),L',  0x76:'HALT',      0x77:'LD (HL),A',
    0x78:'LD A,B',      0x79:'LD A,C',      0x7A:'LD A,D',     0x7B:'LD A,E',     0x7C:'LD A,H',     0x7D:'LD A,L',     0x7E:'LD A,(HL)', 0x7F:'LD A,A',
    0x80:'ADD A,B',     0x81:'ADD A,C',     0x82:'ADD A,D',    0x83:'ADD A,E',    0x84:'ADD A,H',    0x85:'ADD A,L',    0x86:'ADD A,(HL)',0x87:'ADD A,A',
    0x88:'ADC A,B',     0x89:'ADC A,C',     0x8A:'ADC A,D',    0x8B:'ADC A,E',    0x8C:'ADC A,H',    0x8D:'ADC A,L',    0x8E:'ADC A,(HL)',0x8F:'ADC A,A',
    0x90:'SUB B',       0x91:'SUB C',       0x92:'SUB D',      0x93:'SUB E',      0x94:'SUB H',      0x95:'SUB L',      0x96:'SUB (HL)',   0x97:'SUB A',
    0x98:'SBC A,B',     0x99:'SBC A,C',     0x9A:'SBC A,D',    0x9B:'SBC A,E',    0x9C:'SBC A,H',    0x9D:'SBC A,L',    0x9E:'SBC A,(HL)',0x9F:'SBC A,A',
    0xA0:'AND B',       0xA1:'AND C',       0xA2:'AND D',      0xA3:'AND E',      0xA4:'AND H',      0xA5:'AND L',      0xA6:'AND (HL)',   0xA7:'AND A',
    0xA8:'XOR B',       0xA9:'XOR C',       0xAA:'XOR D',      0xAB:'XOR E',      0xAC:'XOR H',      0xAD:'XOR L',      0xAE:'XOR (HL)',   0xAF:'XOR A',
    0xB0:'OR B',        0xB1:'OR C',        0xB2:'OR D',       0xB3:'OR E',       0xB4:'OR H',       0xB5:'OR L',       0xB6:'OR (HL)',    0xB7:'OR A',
    0xB8:'CP B',        0xB9:'CP C',        0xBA:'CP D',       0xBB:'CP E',       0xBC:'CP H',       0xBD:'CP L',       0xBE:'CP (HL)',    0xBF:'CP A',
    0xC0:'RET NZ',      0xC1:'POP BC',      0xC2:'JP NZ,nn',   0xC3:'JP nn',      0xC4:'CALL NZ,nn', 0xC5:'PUSH BC',    0xC6:'ADD A,n',   0xC7:'RST 00H',
    0xC8:'RET Z',       0xC9:'RET',         0xCA:'JP Z,nn',    0xCB:'PREFIX CB',  0xCC:'CALL Z,nn',  0xCD:'CALL nn',    0xCE:'ADC A,n',   0xCF:'RST 08H',
    0xD0:'RET NC',      0xD1:'POP DE',      0xD2:'JP NC,nn',   0xD3:'OUT (n),A',  0xD4:'CALL NC,nn', 0xD5:'PUSH DE',    0xD6:'SUB n',     0xD7:'RST 10H',
    0xD8:'RET C',       0xD9:'EXX',         0xDA:'JP C,nn',    0xDB:'IN A,(n)',    0xDC:'CALL C,nn',  0xDD:'PREFIX DD',  0xDE:'SBC A,n',   0xDF:'RST 18H',
    0xE0:'RET PO',      0xE1:'POP HL',      0xE2:'JP PO,nn',   0xE3:'EX (SP),HL', 0xE4:'CALL PO,nn', 0xE5:'PUSH HL',    0xE6:'AND n',     0xE7:'RST 20H',
    0xE8:'RET PE',      0xE9:'JP (HL)',      0xEA:'JP PE,nn',   0xEB:'EX DE,HL',   0xEC:'CALL PE,nn', 0xED:'PREFIX ED',  0xEE:'XOR n',     0xEF:'RST 28H',
    0xF0:'RET P',       0xF1:'POP AF',      0xF2:'JP P,nn',    0xF3:'DI',         0xF4:'CALL P,nn',  0xF5:'PUSH AF',    0xF6:'OR n',      0xF7:'RST 30H',
    0xF8:'RET M',       0xF9:'LD SP,HL',    0xFA:'JP M,nn',    0xFB:'EI',         0xFC:'CALL M,nn',  0xFD:'PREFIX FD',  0xFE:'CP n',      0xFF:'RST 38H'
};

const opcodeTables = {
    z80:   z80Opcodes,
    '8080': i8080Opcodes,
    '6502': mos6502Opcodes,
    pic16:  pic16Opcodes
};

/* ══════════════════════════════════════════════
   REFERENCIAS AL DOM
══════════════════════════════════════════════ */
const hexInput        = document.getElementById('hexInput');
const decInput        = document.getElementById('decInput');
const binInput        = document.getElementById('binInput');
const z80Input        = document.getElementById('z80Input');
const processorSelect = document.getElementById('processorSelect');
const chipBadge       = document.getElementById('chipBadge');
const procSubtitle    = document.getElementById('procSubtitle');
const procIcon        = document.getElementById('procIcon');
const procInfoName    = document.getElementById('procInfoName');
const procInfoDesc    = document.getElementById('procInfoDesc');

let isUpdating      = false;
let currentProcessor = 'z80';

/* ══════════════════════════════════════════════
   CAMBIO DE PROCESADOR Y FONDO
══════════════════════════════════════════════ */
function switchProcessor(proc) {
    const meta = processorMeta[proc];
    if (!meta) return;

    document.body.className = meta.bodyClass;

    document.querySelectorAll('.bg-layer').forEach(el => {
        el.classList.remove('active', 'flash');
    });
    const newBg = document.getElementById(meta.bgId);
    newBg.classList.add('active', 'flash');

    chipBadge.textContent    = '◈ ' + meta.badge + ' ◈';
    procSubtitle.textContent = meta.subtitle;
    procIcon.textContent     = meta.icon;
    procInfoName.textContent = meta.infoName;
    procInfoDesc.textContent = meta.infoDesc;

    currentProcessor = proc;

    if (decInput.value !== '') {
        const d = parseInt(decInput.value, 10);
        if (!isNaN(d)) updateMnemField(d);
    }
}

/* ══════════════════════════════════════════════
   LÓGICA DE CONVERSIÓN
══════════════════════════════════════════════ */
function updateMnemField(decimal) {
    const table = opcodeTables[currentProcessor];
    if (decimal >= 0 && decimal <= 255 && table[decimal]) {
        z80Input.value = table[decimal];
        z80Input.classList.remove('error');
    } else if (decimal > 255) {
        z80Input.value = '> 8 bits';
    } else {
        z80Input.value = '—';
    }
}

function updateFromHex() {
    if (isUpdating) return;
    const v = hexInput.value.trim().toUpperCase();
    if (v === '') { clearOthers('hex'); return; }
    if (!/^[0-9A-F]+$/.test(v)) { hexInput.classList.add('error'); return; }
    hexInput.classList.remove('error');
    const d = parseInt(v, 16);
    isUpdating = true;
    decInput.value = d;
    binInput.value = d.toString(2);
    updateMnemField(d);
    isUpdating = false;
}

function updateFromDec() {
    if (isUpdating) return;
    const v = decInput.value.trim();
    if (v === '') { clearOthers('dec'); return; }
    if (!/^\d+$/.test(v)) { decInput.classList.add('error'); return; }
    decInput.classList.remove('error');
    const d = parseInt(v, 10);
    isUpdating = true;
    hexInput.value = d.toString(16).toUpperCase();
    binInput.value = d.toString(2);
    updateMnemField(d);
    isUpdating = false;
}

function updateFromBin() {
    if (isUpdating) return;
    const v = binInput.value.trim();
    if (v === '') { clearOthers('bin'); return; }
    if (!/^[01]+$/.test(v)) { binInput.classList.add('error'); return; }
    binInput.classList.remove('error');
    const d = parseInt(v, 2);
    isUpdating = true;
    hexInput.value = d.toString(16).toUpperCase();
    decInput.value = d;
    updateMnemField(d);
    isUpdating = false;
}

function updateFromMnem() {
    if (isUpdating) return;
    const v = z80Input.value.trim().toUpperCase();
    if (v === '') { clearOthers('z80'); return; }
    const table = opcodeTables[currentProcessor];
    let found = null;
    for (const op in table) {
        if (table[op].toUpperCase() === v) { found = parseInt(op); break; }
    }
    if (found !== null) {
        z80Input.classList.remove('error');
        isUpdating = true;
        hexInput.value = found.toString(16).toUpperCase();
        decInput.value = found;
        binInput.value = found.toString(2);
        isUpdating = false;
    } else {
        z80Input.classList.add('error');
    }
}

function clearOthers(src) {
    isUpdating = true;
    if (src !== 'hex') hexInput.value = '';
    if (src !== 'dec') decInput.value = '';
    if (src !== 'bin') binInput.value = '';
    if (src !== 'z80') z80Input.value = '';
    isUpdating = false;
}

/* ══════════════════════════════════════════════
   EVENTOS
══════════════════════════════════════════════ */
hexInput.addEventListener('input', updateFromHex);
decInput.addEventListener('input', updateFromDec);
binInput.addEventListener('input', updateFromBin);
z80Input.addEventListener('input', updateFromMnem);

processorSelect.addEventListener('change', function () {
    switchProcessor(this.value);
});

/* ══════════════════════════════════════════════
   INICIALIZACIÓN
══════════════════════════════════════════════ */
switchProcessor('z80');
decInput.value = '255';
updateFromDec();
