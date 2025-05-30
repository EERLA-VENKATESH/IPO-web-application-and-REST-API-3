import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.model_selection import train_test_split

# Streamlit Title
st.title("Influenza-Like Illness (ILI) Forecasting using Random Forest")

# File Upload
uploaded_file = st.file_uploader("Upload CSV file", type=["csv"])

if uploaded_file:
    df = pd.read_csv(uploaded_file, skiprows=1)
    df.replace('X', pd.NA, inplace=True)  # Replace 'X' with NaN
    
    # Convert numeric columns
    numeric_columns = ['% WEIGHTED ILI', '%UNWEIGHTED ILI', 'AGE 0-4', 'AGE 25-49',
                       'AGE 25-64', 'AGE 5-24', 'AGE 50-64', 'AGE 65', 'ILITOTAL',
                       'NUM. OF PROVIDERS', 'TOTAL PATIENTS']
    df[numeric_columns] = df[numeric_columns].apply(pd.to_numeric, errors='coerce')
    
    # Convert YEAR & WEEK into a Date column
    df['DATE'] = pd.to_datetime(df['YEAR'].astype(str) + df['WEEK'].astype(str) + '1', format='%Y%W%w')
    df.set_index('DATE', inplace=True)
    
    # Handle missing values
    df.fillna(method='ffill', inplace=True)
    
    # Create Lag Features
    df['ILI_LAG_1'] = df['% WEIGHTED ILI'].shift(1)
    df['ILI_LAG_2'] = df['% WEIGHTED ILI'].shift(2)
    
    # Extract Time-based Features
    df['MONTH'] = df.index.month
    df['WEEK'] = df.index.isocalendar().week
    
    # Fill missing values again for lag features
    df.fillna(method='bfill', inplace=True)
    
    # Define Features (X) and Target Variable (y)
    features = ['ILI_LAG_1', 'ILI_LAG_2', 'MONTH', 'WEEK']
    target = '% WEIGHTED ILI'
    X = df[features]
    y = df[target]
    
    # Train-Test Split (80-20)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, shuffle=False)
    
    # Train Random Forest Model
    rf_model = RandomForestRegressor(n_estimators=100, random_state=42)
    rf_model.fit(X_train, y_train)
    y_pred = rf_model.predict(X_test)
    
    # Model Evaluation
    mae = mean_absolute_error(y_test, y_pred)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    r2 = r2_score(y_test, y_pred)
    
    st.subheader("Model Performance")
    st.write(f"**Mean Absolute Error (MAE):** {mae:.4f}")
    st.write(f"**Root Mean Squared Error (RMSE):** {rmse:.4f}")
    st.write(f"**R² Score:** {r2:.4f}")
    
    # Plot Actual vs Predicted
    st.subheader("Actual vs Predicted ILI Cases")
    fig, ax = plt.subplots(figsize=(12, 6))
    ax.plot(y_test.index, y_test, label="Actual ILI Cases", color="blue")
    ax.plot(y_test.index, y_pred, label="Predicted ILI Cases", linestyle="dashed", color="red")
    ax.set_xlabel("Date")
    ax.set_ylabel("% Weighted ILI")
    ax.set_title("Random Forest - Actual vs Predicted ILI Cases")
    ax.legend()
    st.pyplot(fig)
