/* global Blockly */

Blockly.translations = Blockly.translations || {} ,
Blockly.translations.esMsgs = {
// Commands
// ========
    // Builtin
    'GBS_DROP_MSG': '%1 Poner %2',
    'GBS_DROP_TOOLTIP': 'Pone una bolita del color dado en la celda actual.',
    'GBS_GRAB_MSG': '%1 Sacar %2',
    'GBS_GRAB_TOOLTIP': 'Saca una bolita del color dado en la celda actual.',
    'GBS_MOVE_MSG': '%1 Mover %2',
    'GBS_MOVE_TOOLTIP': 'Mueve el cabezal a la celda vecina en la dirección dada.',
    'GBS_MOVETOEDGE_MSG': '%1 Ir al borde %2',
    'GBS_MOVETOEDGE_TOOLTIP': 'Mueve el cabezal a la celda en el borde en la dirección dada.',
    'GBS_CLEANBOARD_MSG': '%1 Limpiar tablero',
    'GBS_CLEANBOARD_TOOLTIP': 'Quita todas las bolitas del tablero. El cabezal queda en la celda actual.',
    'GBS_BOOM_MSG': '%1 Hacer ¡BOOM!, porque %2 %3',
    'GBS_BOOM_INPUT_MOTIVE_MSG': 'agregar motivo...',
    'GBS_BOOM_TOOLTIP': 'Hace que el cabezal explote, especificando un motivo determinado.',
    'GBS_COMPLETE_MSG': 'COMPLETAR',
    'GBS_COMPLETE_TOOLTIP': 'Tenés que reemplazar este bloque por tu solución',
    // Repetitions
    'GBS_REPEAT_MSG_1': 'repetir',
    'GBS_REPEAT_MSG_2': 'veces',
    'GBS_REPEAT_TOOLTIP': 'Repite una serie de comandos una cantidad determinada de veces',
    'GBS_WHILE_MSG': 'repetir mientras que',
    'GBS_WHILE_TOOLTIP': 'Repite una serie de comandos mientras que la condición dada sea verdadera.',
    'GBS_UNTIL_MSG': 'repetir hasta que',
    'GBS_UNTIL_TOOLTIP': 'Repite una serie de comandos hasta que la condición dada sea verdadera.',
    'GBS_FOREACH_MSG': 'Repetir para cada %1 %2 %3',
    'GBS_FOREACH_INDEX_MSG': 'elemento',
    'GBS_FOREACH_TOOLTIP': 'Repite tantas veces como elementos haya en la lista dada, y para cada iteración, llama con el nombre del indice al elemento en dicha posición de la lista.',
    // Alternatives
    'CONTROLS_IF_MSG_ELSE': 'si no',
    'CONTROLS_IF_MSG_ELSEIF': 'si no, si',
    'CONTROLS_IF_MSG_IF': 'si',
    'CONTROLS_IF_MSG_THEN': '',
    'GBS_IF_SIMPLE_TOOLTIP': 'Realiza una secuencia de comandos solo si se cumple la condición dada.',
    'GBS_IF_FULL_MSG': 'si %1 entonces, sino',
    'GBS_IF_FULL_TOOLTIP': 'Realiza la primera secuencia de comandos solo si se cumple la condición dada, caso contrario realiza la segunda secuencia de comandos.',
    'GBS_IF_MULTI_MSG': 'si %1 entonces, sino si %2, sino si %3, sino',
    'GBS_IF_MULTI_TOOLTIP': 'Realiza la secuencia de comandos que sigue a aquella condición que se cumple, ignorando el resto de las secuencia de comandos',
    'GBS_SWITCH_MSG': 'switch %1 case',
    'GBS_SWITCH_TOOLTIP': 'Realiza la secuencia de comandos que se asocia al valor del elemento dado.',
    // Assignment
    'GBS_ASSIGNMENT_MSG': '%1 Recordar que %2 %3 vale %4 %5',
    'GBS_VARIABLE_NAME_MSG': 'una variable',
    'GBS_VARIABLE_NAME_TOOLTIP': 'nombre de la variable',
// Expressions
// ===========
    'GBS_LITERAL_SELECTOR_TOOLTIP': 'Elegir un valor',
    // Literals
    'GBS_COLOR_TYPE_NAME': 'Color',
    'GBS_COLOR_BLUE_MSG': 'Azul',
    'GBS_COLOR_BLACK_MSG': 'Negro',
    'GBS_COLOR_RED_MSG': 'Rojo',
    'GBS_COLOR_GREEN_MSG': 'Verde',
    'GBS_DIR_TYPE_NAME': 'Dirección',
    'GBS_DIR_NORTH_MSG': 'Norte',
    'GBS_DIR_NORTH_TOOLTIP': 'Describe la dirección Norte',
    'GBS_DIR_EAST_MSG': 'Este',
    'GBS_DIR_EAST_TOOLTIP': 'Describe  la dirección Este',
    'GBS_DIR_SOUTH_MSG': 'Sur',
    'GBS_DIR_SOUTH_TOOLTIP': 'Describe la dirección Sur',
    'GBS_DIR_WEST_MSG': 'Oeste',
    'GBS_DIR_WEST_TOOLTIP': 'Describe la dirección Oeste',
    'GBS_BOOL_TYPE_NAME': 'Bool',
    'GBS_BOOL_TRUE_MSG': 'Verdadero',
    'GBS_BOOL_TRUE_TOOLTIP': 'Indica el valor de verdad Verdadero (o sí)',
    'GBS_BOOL_FALSE_MSG': 'Falso',
    'GBS_BOOL_FALSE_TOOLTIP': 'Indica el valor de verdad Falso (o no)',
    'GBS_NUMBER_MSG': '%1',
    'GBS_NUMBER_TOOLTIP': 'Describe un número',
    'GBS_LIST_NIL_MSG': 'La lista vacía',
    'GBS_LIST_NIL_TOOLTIP': 'Describe la lista vacía',
    'GBS_LIST_ENUMERATED_MSG': 'La lista con: %1, %2, %3, ...',
    'GBS_LIST_ENUMERATED_TOOLTIP': 'Describe la lista que contiene a los elementos dados',
    'GBS_LIST_RANGE_MSG': 'El rango desde %1 hasta %2',
    'GBS_LIST_RANGE_TOOLTIP': 'Describe la lista que contiene a los elementos desde el primero al último',
    'GBS_LIST_RANGE_BY_MSG': 'El rango desde %1 hasta %2 salteado de a %3',
    'GBS_LIST_RANGE_BY_TOOLTIP': 'Describe la lista que contiene a los elementos desde el primero al último, tomados en saltos de a la cantidad indicada.',
    // Builtin
    'GBS_NUMSTONES_MSG': 'número de bolitas',
    'GBS_NUMSTONES_TOOLTIP': 'Describe el número de bolitas del color indicado',
    'GBS_HASSTONES_MSG': 'hay bolitas',
    'GBS_HASSTONES_TOOLTIP': 'Indica si hay bolitas del color dado.',
    'GBS_CANMOVE_MSG': 'puede mover',
    'GBS_CANMOVE_TOOLTIP': 'Indica si se puede mover el cabezal una celda hacia la dirección dada.',
    'GBS_HEAD_MSG': 'primero de $1',
    'GBS_HEAD_TOOLTIP': 'Describe el primer elemento de la lista dada',
    'GBS_TAIL_MSG': 'sin el primero de %1',
    'GBS_TAIL_TOOLTIP': 'Describe una lista con todos los elementos de la lista dada, menos el primero',
    'GBS_ISEMPTY_MSG': 'está vacía %1',
    'GBS_ISEMPTY_TOOLTIP': 'Indica si la lista dada está vacía',
    // Enumeration
    'GBS_NEXT_MSG': 'siguiente',
    'GBS_NEXT_TOOLTIP': 'Describe el elemento siguiente al dado.',
    'GBS_PREVIOUS_MSG': 'previo',
    'GBS_PREVIOUS_TOOLTIP': 'Describe el elemento previo al dado.',
    'GBS_OPPOSITE_MSG': 'opuesto',
    'GBS_OPPOSITE_TOOLTIP': 'Describe el elemento opuesto al dado.',
    // Aritmetic
    'GBS_ADD_MSG': '%1 + %2',
    'GBS_ADD_TOOLTIP': 'Desribe la suma de los número dados.',
    'GBS_SUB_MSG': '%1 - %2',
    'GBS_SUB_TOOLTIP': 'Desribe la resta de los número dados.',
    'GBS_MUL_MSG': '%1 * %2',
    'GBS_MUL_TOOLTIP': 'Desribe la multiplicación de los número dados.',
    'GBS_DIV_MSG': '%1 / %2',
    'GBS_DIV_TOOLTIP': 'Desribe el resultado de la división entera de los número dados.',
    'GBS_MOD_MSG': '%1 % %2',
    'GBS_MOD_TOOLTIP': 'Desribe el resto de la división entera de los número dados.',
    'GBS_POW_MSG': '%1 ^ %2',
    'GBS_POW_TOOLTIP': 'Desribe el resultado de elevar el primero de los número a la potencia dada por el segundo número.',
    // Comparing
    'GBS_EQ_MSG': '%1 == %2',
    'GBS_EQ_TOOLTIP': 'Indica si el primer elemento es igual al segundo',
    'GBS_NEQ_MSG': '%1 /= %2',
    'GBS_NEQ_TOOLTIP': 'Indica si el primer elemento es distinto al segundo',
    'GBS_LT_MSG': '%1 < %2',
    'GBS_LT_TOOLTIP': 'Indica si el primer elemento es menor al segundo',
    'GBS_GT_MSG': '%1 > %2',
    'GBS_GT_TOOLTIP': 'Indica si el primer elemento es mayor al segundo',
    'GBS_LEQ_MSG': '%1 <= %2',
    'GBS_LEQ_TOOLTIP': 'Indica si el primer elemento es menor o igual al segundo',
    'GBS_GEQ_MSG': '%1 <= %2',
    'GBS_GEQ_TOOLTIP': 'Indica si el primer elemento es mayor o igual al segundo',
    // Logical
    'GBS_AND_MSG': 'y también',
    'GBS_AND_TOOLTIP': 'Describe la conjunción lógica de dos booleanos dados.',
    'GBS_OR_MSG': 'o bien',
    'GBS_OR_TOOLTIP': 'Describe la disyunción lógica de dos booleanos dados.',
    'GBS_NOT_MSG': 'no',
    'GBS_NOT_TOOLTIP': 'Describe la conjunción lógica del booleano dado.',
    // Alternatives
    'GBS_CHOOSE_MSG_1': 'elegir',
    'GBS_CHOOSE_MSG_2': 'cuando',
    'GBS_CHOOSE_TOOLTIP': 'Describe la expresión que se asocia a la primer condición que resulte verdadera, o la del caso contrario, en caso de que ninguna se cumpla.',
    'GBS_MATCHING_MSG': 'si %1 es igual a %2 describir %3, %4 en caso contrario',
    'GBS_MATCHING_TOOLTIP': 'Describe la expresión que se asocia al valor que tenga la expresión dada.',
// Definitions
// ===========
    // Programs
    'GBS_PROGRAM_MSG': 'programa',
    'GBS_PROGRAM_TOOLTIP': 'Define un nuevo programa.',
    'GBS_INTERACTIVEPROGRAM_MSG': 'programa interactivo',
    'GBS_INTERACTIVEPROGRAM_TOOLTIP': 'Define un nuevo programa interactivo.',
    'GBS_INTERACTIVEPROGRAM_CONTEXT_ADD_TIMEOUT_MSG': 'Agregar timeout.',
    'GBS_INTERACTIVEPROGRAM_CONTEXT_ADD_TIMEOUT_TOOLTIP': 'Agregar un timeout en milisegundos.',
    'GBS_INTERACTIVEPROGRAM_CONTEXT_ADD_INIT_MSG': 'Agregar inicialización.',
    'GBS_INTERACTIVEPROGRAM_CONTEXT_ADD_INIT_TOOLTIP': 'Agregar un bloque de inicialización.',
    // Procedures
    'PROCEDURES_DEFNORETURN_PROCEDURE': 'hacer algo',
    'GBS_PROCEDURE_SIMPLE_MSG': 'procedimiento $1',
    'GBS_PROCEDURE_SIMPLE_TOOLTIP': 'Define un nuevo procedimiento símple.',
    'GBS_PROCEDURE_PARAMS_MSG': 'procedimiento $1 con',
    'GBS_PROCEDURE_PARAMS_TOOLTIP': 'Define un nuevo procedimiento con parámetros.',
    // Functions
    'GBS_FUNCTION_SIMPLE_MSG': 'función $1',
    'GBS_FUNCTION_SIMPLE_TOOLTIP': 'Define una función simple.',
    'GBS_FUNCTION_SIMPLE_PARAM_MSG': 'función $1 con',
    'GBS_FUNCTION_SIMPLE_PARAM_TOOLTIP': 'Define una función simple con parámetros.',
    'GBS_FUNCTION_PROCESSING_MSG': 'función $1',
    'GBS_FUNCTION_PROCESSING_TOOLTIP': 'Define una función con procesamiento.',
    'GBS_FUNCTION_PROCESSING_PARAM_MSG': 'función $1 con',
    'GBS_FUNCTION_PROCESSING_PARAM_TOOLTIP': 'Define una función con procesamiento con parámetros',

// Other
// =====
    'GBS_PROCEDURE_ARG_SOMETHING': 'Hacer algo',

    'GBS_FUNCTION_ARG_SOMETHING': 'algo',
    'GBS_FUNCTION_ARG_DEFINES': 'Define que',
    'GBS_FUNCTION_ARG_EQUAL_TO': 'es igual a',

    'GBS_TOOLTIPS_DELETE': 'Eliminar',
    'GBS_TOOLTIPS_ONINIT': 'Al inicializar:',
    'GBS_TOOLTIPS_ONPUSH': 'Al apretar...',
    'GBS_TOOLTIPS_ONPUSH_DEFINED': 'On push ',
    'GBS_TOOLTIPS_ONTIMEOUT': 'Al estar inactivo %{timeout} milisegundos',
    'GBS_TOOLTIPS_ADD_MODIFIER': 'Agregar modificador',
    'GBS_TOOLTIPS_CLEAN_MODIFIER': 'Limpiar modificadores',

    'GBS_TOOLTIPS_KEY_LETTER': 'letra',
    'GBS_TOOLTIPS_KEY_NUMBER': 'número',
    'GBS_TOOLTIPS_KEY_SPECIAL': 'tecla',

    'GBS_TOOLTIPS_KEY_SPACE': 'Espacio',
    'GBS_TOOLTIPS_KEY_ENTER': 'Enter',
    'GBS_TOOLTIPS_KEY_BACKSPACE': 'Borrar',
    'GBS_TOOLTIPS_KEY_DEL': 'Suprimir',
    'GBS_TOOLTIPS_KEY_INSERT': 'Insertar',
    'GBS_TOOLTIPS_KEY_TAB': 'Tab',
    'GBS_TOOLTIPS_KEY_ESCAPE': 'Escape',

    'GBS_TOOLTIPS_IFS_ADD_ELSEIF': 'Agregar rama "si no, si"',
    'GBS_TOOLTIPS_IFS_CLEAN_BRANCHES': 'Limpiar ramas "si no, si"',

    'GBS_TOOLTIPS_OPERATOR_ADD': 'Agregar elemento',
    'GBS_TOOLTIPS_OPERATOR_REMOVE': 'Quitar elemento',
    'GBS_TOOLTIPS_OPTIONS_ADD': 'Agregar opción',
    'GBS_TOOLTIPS_OPTIONS_REMOVE': 'Quitar opción',
    'GBS_TOOLTIPS_OPTIONS_OR_ELSE': 'o si no',
    'GBS_TOOLTIPS_VARS_GET': 'Obtener variable',
    'GBS_TOOLTIPS_VARS_CREATE': 'Crear ${varname}',

    'GBS_TOOLTIPS_SHOW_STEP_OFF': '✗ Mostrar paso a paso',
    'GBS_TOOLTIPS_SHOW_STEP_ON': '✓ Mostrar paso a paso',

    // proceds-blockly
    'PROCEDURES_DEFNORETURN_COMMENT': 'Describe el procedimiento...',
    'PROCEDURES_DEFNORETURN_PROCEDURE': 'Hacer algo',
    'PROCEDURES_DEFNORETURN_TITLE': 'Definir',
    'PROCEDURES_DEFNORETURN_NOPARAMS': '',
    'PROCEDURES_DEFRETURN_NOPARAMS': '',
    'PROCEDURES_DEFRETURN_COMMENT': 'Describe la función...',
    'PROCEDURES_DEFRETURN_PROCEDURE': 'devolver algo',
    'PROCEDURES_DEFRETURN_TITLE': 'Definir',
    'PROCEDURES_BEFORE_PARAMS': 'con',
    'PROCEDURES_DEFNORETURN_TOOLTIP': 'Crea un procedimiento.',
    'PROCEDURES_DEFRETURN_TOOLTIP': 'Crea una función.',
    'PROCEDURES_ADD_PARAMETER': 'Agregar parámetro',
    'PROCEDURES_ADD_PARAMETER_PROMPT': 'Ingresa el nombre del parámetro',
    'PROCEDURES_REMOVE_PARAMETER': 'Quitar parámetro',
    'PROCEDURES_PARAMETER': 'parámetro'
}
Blockly.translations.es = function() {
  for (var key in Blockly.translations.esMsgs) {
    Blockly.Msg[key] = Blockly.translations.esMsgs[key]
  }
  console.log('translated');
}
// Initialize default message if not defined
if (!Blockly.GBS_DROP_MSG) {
  Blockly.translations.es(),
  Blockly.translations.defaultLanguage = 'es';
}
