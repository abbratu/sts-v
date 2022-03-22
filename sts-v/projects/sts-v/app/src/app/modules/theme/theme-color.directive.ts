import { ElementRef } from '@angular/core';
// import { ThemePalette } from '@angular/material/core';
// import { HasElementRef } from '@angular/material/core/common-behaviors/color';
import { Constructor } from '@angular/material/core/common-behaviors/constructor';

export interface CanColor {
  color: ThemePalette;
  defaultColor: ThemePalette | undefined;
  shade: ThemePaletteShade;
  defaultShade: ThemePaletteShade | undefined;
}

/** @docs-private */
export type CanColorCtor = Constructor<CanColor>;

/** @docs-private */
export interface HasElementRef {
  _elementRef: ElementRef;
}

export type ThemePalette = 'primary' | 'accent' | 'warn' | undefined;
export type ThemePaletteShade =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'A100'
  | 'A200'
  | 'A300'
  | 'A400'
  | undefined;

/** Mixin to augment a directive with a `color` property. */
export function mixinColor<T extends Constructor<HasElementRef>>(
  base: T,
  defaultColor?: ThemePalette,
  defaultShade?: ThemePaletteShade
): CanColorCtor & T {
  return class extends base {
    private _color: ThemePalette;
    private _shade: ThemePaletteShade;

    get shade(): ThemePaletteShade {
      return this._shade;
    }

    set shade(value: ThemePaletteShade) {
      const colorShade = value || this.defaultShade;

      if (colorShade !== this._shade) {
        if (this._shade) {
          this._elementRef.nativeElement.classList.remove(
            `mat-${this._color}-${this._shade}`
          );
        }
        if (colorShade) {
          this._elementRef.nativeElement.classList.add(
            `mat-${this._color}-${colorShade}`
          );
        }

        this._shade = colorShade;
      }
    }

    defaultColor = defaultColor;
    defaultShade = defaultShade;

    get color(): ThemePalette {
      return this._color;
    }
    set color(value: ThemePalette) {
      const colorPalette = value || this.defaultColor;

      if (colorPalette !== this._color) {
        if (this._color) {
          this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
        }
        if (colorPalette) {
          this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
        }

        this._color = colorPalette;
      }
    }

    constructor(...args: any[]) {
      super(...args);
      this.color = defaultColor;
      this.shade = defaultShade;
    }
  };
}

// export type ThemePaletteShade =
//   | '50'
//   | '100'
//   | '200'
//   | '300'
//   | '400'
//   | '500'
//   | '600'
//   | '700'
//   | '800'
//   | '900'
//   | 'A100'
//   | 'A200'
//   | 'A300'
//   | 'A400'
//   | undefined;

// export interface CanColorShade {
//   color: ThemePalette;
//   shade: ThemePaletteShade;
//   defaultColor: ThemePalette | undefined;
//   defaultShade: ThemePaletteShade | undefined;
// }

// export type CanColorShadeCtor = Constructor<CanColorShade>;

// export function mixinColorShade<T extends Constructor<HasElementRef>>(
//   base: T,
//   defaultColor?: ThemePalette,
//   defaultShade?: ThemePaletteShade
// ): CanColorShade & T {
//   return class extends base {
//     private _color: ThemePalette;
//     defaultColor = defaultColor;

//     private _shade: ThemePaletteShade;
//     defaultShade = defaultShade;

//     get shade(): ThemePaletteShade {
//       return this._shade;
//     }
//     set shade(value: ThemePaletteShade) {
//       const colorShade = value || this.defaultShade;

//       if (colorShade !== this._shade) {
//         this._elementRef.nativeElement.classList.remove(
//           `mat-shade-${this._shade}`
//         );
//       }

//       if (colorPalette) {
//         this._elementRef.nativeElement.classList.add(
//           `mat-shade-${this._shade}`
//         );
//       }

//       this._shade = colorShade;
//     }

//     get color(): ThemePalette {
//       return this._color;
//     }
//     set color(value: ThemePalette) {
//       const colorPalette = value || this.defaultColor;

//       if (colorPalette !== this._color) {
//         if (this._color) {
//           this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
//         }
//         if (colorPalette) {
//           this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
//         }

//         this._color = colorPalette;
//       }
//     }

//     constructor(...args: any[]) {
//       super(...args);

//       // Set the default color that can be specified from the mixin.
//       this.color = defaultColor;
//       this.shade = defaultShade;
//     }
//   };
// }
