/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForgotPasswordDto } from '../models/ForgotPasswordDto';
import type { LoginDto } from '../models/LoginDto';
import type { RegisterDto } from '../models/RegisterDto';
import type { ResetPasswordDto } from '../models/ResetPasswordDto';
import type { UpdateAccountDto } from '../models/UpdateAccountDto';
import type { UpdatePasswordDto } from '../models/UpdatePasswordDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Register a new user
     * @param requestBody
     * @returns any User registered successfully
     * @throws ApiError
     */
    public static authControllerRegister(
        requestBody: RegisterDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Email already exists`,
            },
        });
    }
    /**
     * Login with email and password
     * @param requestBody
     * @returns any Login successful
     * @throws ApiError
     */
    public static authControllerLogin(
        requestBody: LoginDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Invalid credentials`,
            },
        });
    }
    /**
     * Get current user profile
     * @returns any User profile retrieved
     * @throws ApiError
     */
    public static authControllerGetAccount(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/account',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Update user profile
     * @param requestBody
     * @returns any Account updated successfully
     * @throws ApiError
     */
    public static authControllerUpdateAccount(
        requestBody: UpdateAccountDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/auth/account',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }
    /**
     * Change user password
     * @param requestBody
     * @returns any Password updated successfully
     * @throws ApiError
     */
    public static authControllerUpdatePassword(
        requestBody: UpdatePasswordDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/auth/password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized or wrong password`,
            },
        });
    }
    /**
     * Request a password reset token
     * @param requestBody
     * @returns any Reset token generated
     * @throws ApiError
     */
    public static authControllerForgotPassword(
        requestBody: ForgotPasswordDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/forgot-password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Email not found`,
            },
        });
    }
    /**
     * Reset password using a reset token
     * @param requestBody
     * @returns any Password reset successfully
     * @throws ApiError
     */
    public static authControllerResetPassword(
        requestBody: ResetPasswordDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/reset-password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid or expired token`,
            },
        });
    }
}
